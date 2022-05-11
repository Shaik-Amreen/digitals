import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-accesslibrary',
  templateUrl: './admin-accesslibrary.component.html',
  styleUrls: ['./admin-accesslibrary.component.css']
})
export class AdminAccesslibraryComponent implements OnInit {
data:any[]=[]
  constructor(private http:HttpClient) {
    this.http.post<any>('http://localhost:4000/librarian/bookname',{mail:sessionStorage.getItem('mail')}).subscribe(
      res=>{
        this.data=res;
        console.log(res)
        },
        err=>console.log(err)
    
     );
   }

   downloadPdf(i:number) {
    const source = `data:application/pdf;base64,${this.data[i].book}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${this.data[i].bookname}.pdf`
    link.click();
  }

  ngOnInit(): void {
  }

}
