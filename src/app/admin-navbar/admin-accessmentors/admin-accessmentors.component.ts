import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-accessmentors',
  templateUrl: './admin-accessmentors.component.html',
  styleUrls: ['./admin-accessmentors.component.css']
})
export class AdminAccessmentorsComponent implements OnInit {
data:any[]=[]
  constructor(private http:HttpClient) { 
    this.http.post<any>('http://localhost:4000/mentor/getstudents','').subscribe(
      res=>{
        this.data=res;
        console.log(res)
        },
        err=>console.log(err)
    
     );
  }

  ngOnInit(): void {
  }

}
