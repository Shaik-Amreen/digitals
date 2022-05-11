import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-accesstechnicalheads',
  templateUrl: './admin-accesstechnicalheads.component.html',
  styleUrls: ['./admin-accesstechnicalheads.component.css']
})
export class AdminAccesstechnicalheadsComponent implements OnInit {
data:any[]=[]
  constructor(private http:HttpClient) {
    this.http.post<any>('http://localhost:4000/technicalhead/gettechnicals','').subscribe(
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
