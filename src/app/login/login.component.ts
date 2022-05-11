import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  mail='';otp='';generatedotp='';timeRemained=120;invalidotp=false;mailerr=''
  loginMode=true;errorMode=false;errorMessage='';buttonMode='SEND OTP';forgotErr=false
  changeMode(){
    this.mail=''
    this.loginMode=!this.loginMode
  }
 
  
  signInForm:FormGroup;

  constructor(private router : Router,private http : HttpClient) {
    localStorage.removeItem('mail')
    this.signInForm=new FormGroup({
      'mail':new FormControl('',Validators.required),
       'password':new FormControl('',Validators.required)
   
    })
     }

     checkOtp(f:NgForm){
       console.log(f.value,this.generatedotp,this.mail)
       if(f.value.otp==this.generatedotp){this.router.navigate(['/forgotpassword']);localStorage.setItem('mail',this.mail)}
       else{this.invalidotp=true;f.reset()}
      }

     forget(f:NgForm){
       this.mailerr=''
       this.buttonMode='SENDING';this.forgotErr=false;this.invalidotp=false
       this.http.post<any>('http://localhost:4000/api/forgotpassword',f.value).subscribe(
         res=>{
           if(res.otp)
          {this.buttonMode='SENT';this.generatedotp=res.otp;
          this.timeRemained=120;
            let time=setInterval(()=>{this.timeRemained--},1000)
            setTimeout(()=>{this.generatedotp='';clearInterval(time);this.buttonMode='RESEND OTP'},120000)
            
          }else if(res.error=='error')
          {this.forgotErr=true;this.mailerr='INVALID MAIL';this.buttonMode='SEND OTP';f.reset()}
           else{this.forgotErr=true;this.mailerr='POOR CONNECTION';this.buttonMode='SEND OTP';}},
         err=>{this.forgotErr=true;this.mailerr='POOR CONNECTION';this.buttonMode='SEND OTP';}
       )
      }




     signIn(){

      this.http.post<any>('http://localhost:4000/users/getuser',this.signInForm.value).subscribe(
        res=>{
          if(res.status=='error'){
              this.errorMode=true;
              this.errorMessage=res.error
          }
          else
          {
            console.log(res)
              this.errorMode=false;
              sessionStorage.setItem('mail', res.facultydetailsdata);
              localStorage.setItem('token',res.token);
              localStorage.setItem('role',res.role);
              localStorage.setItem('username',res.username);
              if(res.role.includes('hod') || res.role.includes('faculty') || res.role.includes('librarian')){
              this.router.navigate(['/admin'])}
              // else if(res.role.includes('student')){
              //   this.router.navigate(['/mitstudentspcell'])
              // }
              else if(res.role.includes('superadmin')){
                this.router.navigate(['/superadmin'])
              }
              else if(res.role.includes('stationer')){
                this.router.navigate(['/stationary'])
              }
              else if(res.role.includes('student')){
                this.router.navigate(['/student'])
              }
          }

        },
        err=>console.log(err)
       );
       
     }



  ngOnInit(): void {
  
  }

}
