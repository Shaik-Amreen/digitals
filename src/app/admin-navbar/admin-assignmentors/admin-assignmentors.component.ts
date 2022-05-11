import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-admin-assignmentors',
  templateUrl: './admin-assignmentors.component.html',
  styleUrls: ['./admin-assignmentors.component.css']
})
export class AdminAssignmentorsComponent implements OnInit {

 
  
  refresh(){
    window.location.reload()
  }
 
  constructor(private http :HttpClient) { }
  role:any=''
  data=[];
  mapping:any=[];
  keys:any;
  objkey:any=[];
  savingMode='SAVE'
  saveMode=false
 savedm=false
 
  save(){
   
    for(let c of this.mapping){
      if(c.mail.includes('@mits.ac.in')==false){alert("mentor mails should end up with @mits.ac.in");this.mapping=[];this.keys=[]
      window.location.reload();break;}
      if(c.studentmail.includes('@mits.ac.in')==false){alert("student mails should end up with @mits.ac.in");this.mapping=[];this.keys=[]
      window.location.reload();break;}
      c.studentmail=c.studentmail.toLowerCase();
      c.mail=c.mail.toLowerCase()

    }
   this.http.post<any>('http://localhost:4000/mentor/poststudentlist',this.mapping).subscribe(
    res=>{
      this.savedm=true
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
   if(this.keys.length!=2){alert("invalid format");window.location.reload()}
   this.keys[0]='mail';
      this.mapping = this.data.map((e) => {
         let obj:any = {};
         this.keys.forEach((key:any, i:any) => {
           this.keys[0]='mail'
           this.keys[1]='studentmail'
     
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

}
