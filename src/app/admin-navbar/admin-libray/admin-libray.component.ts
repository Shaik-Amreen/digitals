import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-admin-libray',
  templateUrl: './admin-libray.component.html',
  styleUrls: ['./admin-libray.component.css']
})
export class AdminLibrayComponent implements OnInit {

  materials:FormGroup;
  constructor(private http :HttpClient) {
    this.materials=new FormGroup({
      'bookname':new FormControl('',Validators.required),
      'mail':new FormControl(sessionStorage.getItem('mail'),Validators.required),
      'book':new FormControl('',Validators.required)
    })
   }
   base64Output : string=''; 
savedata=false
  onFileSelected(event : any) {
    this.convertFile(event.target.files[0]).subscribe((base64 : any) => {
      this.base64Output = base64;
    });
  
  }
convertFile(file : File) : Observable<string> {
  const result = new ReplaySubject<string>(1);
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = (event : any) => result.next(btoa(event.target.result.toString()));
  return result;
}
  
save(){
  console.log(this.base64Output)
  this.materials.value.book=this.base64Output;
  this.http.post<any>('http://localhost:4000/librarian/book',this.materials.value).subscribe(
    res=>{
      this.savedata=true
      },
      err=>console.log(err)
  
   );
    this.savedata=true
}
refresh(){
  window.location.reload()
}

  btech=['cse','ece','eee','mech','civil','cst']
  ngOnInit(): void {
  }

}
