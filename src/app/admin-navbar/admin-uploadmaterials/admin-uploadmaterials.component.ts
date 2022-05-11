import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-admin-uploadmaterials',
  templateUrl: './admin-uploadmaterials.component.html',
  styleUrls: ['./admin-uploadmaterials.component.css']
})
export class AdminUploadmaterialsComponent implements OnInit {
  materials:FormGroup;
  constructor(private http :HttpClient) {
    this.materials=new FormGroup({
      'course':new FormControl('',Validators.required),
      'department':new FormControl('',Validators.required),
      'year':new FormControl('',Validators.required),
      'semester':new FormControl('',Validators.required),
      'subjectcode':new FormControl('',Validators.required),
      'subjectname':new FormControl('',Validators.required),
      'unit':new FormControl('',Validators.required),
      'material':new FormControl('',Validators.required),
      'yearofjoining':new FormControl('',Validators.required)
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
  this.materials.value.material=this.base64Output
  this.http.post<any>('http://localhost:4000/faculty/uploadmaterial',{'mail':sessionStorage.getItem('mail'),"materialdetails":this.materials.value}).subscribe(
    res=>{
      this.savedata=true
      },
      err=>console.log(err)
  
   );
   
 
}
refresh(){
  window.location.reload()
}

  btech=['cse','ece','eee','mech','civil','cst']
  ngOnInit(): void {
  }

}
