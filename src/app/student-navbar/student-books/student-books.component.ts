import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-books',
  templateUrl: './student-books.component.html',
  styleUrls: ['./student-books.component.css']
})
export class StudentBooksComponent implements OnInit {
data:any=[]
  constructor(private http:HttpClient) { 
    this.http.post<any>('http://localhost:4000/librarian/bookname','').subscribe(
      response=>{
      
    this.data=response
        },
        error=>console.log(error)
    
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
