import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-accesstudents',
  templateUrl: './admin-accesstudents.component.html',
  styleUrls: ['./admin-accesstudents.component.css']
})
export class AdminAccesstudentsComponent implements OnInit {

  
  constructor(private http :HttpClient,private router: Router) { 
    if(!localStorage.getItem('role')?.includes('hod')){
      if(localStorage.getItem('role')?.includes('faculty')){
        router.navigate(['/admin/uploadmaterials'])
      }
      else if(localStorage.getItem('role')?.includes('stationer')){
        router.navigate(['/admin/stationary'])
      }
    }
  }
  course:any='';department:any=''
  data:any[]=[];
 
  savingMode='SAVE'
  saveMode=false;
  btech=['cse','ece','eee','mech','civil','cst']
 savedata=false
  save(){
 
   if(this.course!='btech'){this.department=''}
  
    this.http.post<any>('http://localhost:4000/student/getstudents',{course:this.course,department:this.department}).subscribe(
    res=>{
      console.log(res)
     this.data=res
      this.savedata=true
      },
      err=>console.log(err)
  
   );
 }
 
 
  ngOnInit(): void {
  }

  refresh(){
    window.location.reload()
  }

}
