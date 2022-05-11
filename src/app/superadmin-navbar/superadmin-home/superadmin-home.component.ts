import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-home',
  templateUrl: './superadmin-home.component.html',
  styleUrls: ['./superadmin-home.component.css']
})
export class SuperadminHomeComponent implements OnInit {

  facdata:any[]=[];selectedUser:any={};pd:any=[];selectedMode=false;mail=sessionStorage.getItem('mail')
  edit=false;indeexnum=0;userform:FormGroup;

  constructor(private http : HttpClient,private router : Router) {
    this.http.post<any>('http://localhost:4000/users/userdetails','').subscribe(
      res=>{this.pd = JSON.parse(JSON.stringify(res));this.facdata=res;},
      err=>console.log(err)
     );

     this.userform=new FormGroup({
       username:new FormControl('',Validators.required),
      
     })
    
     
  }

  deleteuser(){
    this.http.post<any>('http://localhost:4000/users/deleteuser',{mail:this.pd[this.indeexnum].mail}).subscribe(
      res=>{this.selectedMode=false;this.pd.splice(this.indeexnum,1)},
      err=>console.log(err)
     );
  }
  selectUser(i:any){
    this.indeexnum=i
       this.selectedUser=this.facdata[i]
       this.selectedMode=true;
       this.userform.controls.username.setValue(this.selectedUser.username);

  }

  close(){
this.edit=false;
this.userform.controls.username.setValue(this.selectedUser.username);
this.selectedUser.role=this.pd[this.indeexnum].role
console.log(this.facdata[this.indeexnum])
  }

  removelevel(i:any){
    console.log(this.userform.value)
this.selectedUser.role.splice(i,1)
  }
save(){
  this.http.post<any>('http://localhost:4000/users/updateuser',{mail:this.selectedUser.mail,role:this.selectedUser.role,username:this.userform.value.username}).subscribe(
    res=>{this.edit=false;this.pd[this.indeexnum].role=this.selectedUser.role;this.pd[this.indeexnum].username=this.userform.value.username},
    err=>console.log(err)
   );
}
  ngOnInit(): void {
 
  }

  
}
