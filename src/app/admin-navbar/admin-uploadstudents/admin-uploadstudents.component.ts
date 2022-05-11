import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-uploadstudents',
  templateUrl: './admin-uploadstudents.component.html',
  styleUrls: ['./admin-uploadstudents.component.css']
})
export class AdminUploadstudentsComponent implements OnInit {

  
  constructor(private http :HttpClient,private router: Router) { 
    if(!localStorage.getItem('role')?.includes('hod')){
      if(localStorage.getItem('role')?.includes('faculty')){
        router.navigate(['/admin/uploadmaterials'])
      }
      else if(localStorage.getItem('role')?.includes('stationer')){
        router.navigate(['/admin/stationary'])
      }
      else if(localStorage.getItem('role')?.includes('librarian')){
        router.navigate(['/admin/library'])
      }
    }
  }
  course:any='';department:any=''
  data=[];
  mapping:any=[];
  keys:any;
  objkey:any=[];
  savingMode='SAVE'
  saveMode=false;
  btech=['cse','ece','eee','mech','civil','cst']
 savedata=false
  save(){
    this.savingMode="SAVING"
    for(let c of this.mapping){
      c.department=this.department,
      c.course=this.course,
      c.rollnumber=c.rollnumber.toLowerCase()
      c.mail=c.rollnumber+'@mits.ac.in'
      c.password=c.rollnumber
      c.role=["student"]
    }
    this.http.post<any>('http://localhost:4000/student/poststudentdata',this.mapping).subscribe(
    res=>{
     console.log(res)
     this.savingMode="SAVED"
      this.savedata=true
      },
      err=>console.log(err)
  
   );
 }
 
  onfilesubmit(evt: any) {
    this.mapping=[];this.keys=[]
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(evt.target.files[0]);
 
    reader.onload = (x: any) => {
      const bstr: string = x.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      this.keys= this.data.shift(); 
   if(this.keys.length!=4){alert("invalid format");window.location.reload()}
   this.keys[0]='username';
      this.mapping = this.data.map((e) => {
         let obj:any = {};
         this.keys.forEach((key:any, i:any) => {
           this.keys[0]='username'
           this.keys[1]='rollnumber'
           this.keys[2]='yearofjoining'
           this.keys[3]='mobile'
           obj[key] = e[i];
         });
       return obj;
     }); 
     this.keys.forEach((value:any,key:any) => {
       this.objkey[key] = value
       });
       this.saveMode=true
       
    };
  }
  ngOnInit(): void {
  }

  refresh(){
    window.location.reload()
  }

}
