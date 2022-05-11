import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-assigntechnicalheads',
  templateUrl: './admin-assigntechnicalheads.component.html',
  styleUrls: ['./admin-assigntechnicalheads.component.css']
})
export class AdminAssigntechnicalheadsComponent implements OnInit {

  
  refresh(){
    window.location.reload()
  }
 
  constructor(private http :HttpClient) { }
  
  data=[];
  mapping:any=[];
  keys:any;
  objkey:any=[];
  savingMode='SAVE'
  saveMode=false
 savedata=false
 
  save(){
   
    for(let c of this.mapping){
      
      if(c.mail.includes('@mits.ac.in')==false){alert("Mails should end up with @mits.ac.in");this.mapping=[];this.keys=[]
      window.location.reload();break;}

      c.mail=c.mail.toLowerCase()
      this.http.post<any>('http://localhost:4000/technicalhead/posttechnicalspecialization',this.mapping).subscribe(
    res=>{
     
      this.savedata=true
      },
      err=>console.log(err)
  
   );
      
    }
   
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
           this.keys[1]='specialization'
     
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
