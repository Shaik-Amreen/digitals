import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-superadmin-create',
  templateUrl: './superadmin-create.component.html',
  styleUrls: ['./superadmin-create.component.css']
})
export class SuperadminCreateComponent implements OnInit {
user:FormGroup;savemode=false
  constructor(private http:HttpClient) {
    this.user=new FormGroup({
      'mail':new FormControl('',Validators.required),
      'username':new FormControl('',Validators.required),
      'role':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
    
    })
   }

   save(){
    if(this.user.value.mail.includes('@mits.ac.in')==false){alert("Mails should end up with @mits.ac.in");
    window.location.reload();}
     let a=[];a.push(this.user.value.role)
     this.user.value.role=a;
    this.http.post<any>('http://localhost:4000/users/register',this.user.value).subscribe(
      res=>{
        this.savemode=true
       console.log(res)

      },
      err=>console.log(err)
     );
   }
  ngOnInit(): void {
  }

}
