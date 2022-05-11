import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  data:any=[]

  constructor(private http:HttpClient) { 
    
    this.http.post<any>('http://localhost:4000/faculty/getstudentmaterial',{mail:sessionStorage.getItem('mail')}).subscribe(
      res=>{
          this.data=res
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
