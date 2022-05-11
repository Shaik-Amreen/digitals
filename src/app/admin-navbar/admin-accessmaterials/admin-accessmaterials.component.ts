import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-accessmaterials',
  templateUrl: './admin-accessmaterials.component.html',
  styleUrls: ['./admin-accessmaterials.component.css']
})
export class AdminAccessmaterialsComponent implements OnInit {
  username=localStorage.getItem('username')
data:any[]=[]
  constructor(private http:HttpClient) {
    this.http.post<any>('http://localhost:4000/faculty/getmaterial',{mail:sessionStorage.getItem('mail')}).subscribe(
      res=>{
        this.data=res.materialdetails;
        console.log(res)
        },
        err=>console.log(err)
    
     );
   }

   downloadPdf(i:number) {
    const source = `data:application/pdf;base64,${this.data[i].material}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${this.data[i].unit}.pdf`
    link.click();
  }

  ngOnInit(): void {
  }

}
