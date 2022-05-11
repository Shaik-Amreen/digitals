import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-specification',
  templateUrl: './student-specification.component.html',
  styleUrls: ['./student-specification.component.css']
})
export class StudentSpecificationComponent implements OnInit {
data:any=[];specification:any=[];selectoption=false;editedata:any=[];finalstore:any=[];stored=false;selectedcourse:any=[]
  constructor(private http:HttpClient) {
   
    this.http.post<any>('http://localhost:4000/student/getstudentspecification',{mail:sessionStorage.getItem('mail')}).subscribe(
      res=>{
        this.http.post<any>('http://localhost:4000/technicalhead/gettechnicals','').subscribe(
          response=>{
            this.data=res;

      
            if(res.length==0){this.selectoption=true}
            if(response.length==0){this.selectoption=false}  
            this.specification=response;console.log(this.specification,res)
           this.selectedcourse=this.specification.filter((e:any)=>(res.some((d:any)=>(e.specialization==d.technology))))
        
            },
            error=>console.log(error)
        
         ); 
      
        },
        err=>console.log(err)
    
     );
    
   }

   edit(e:any){
   
     if(!this.editedata.includes(e.specialization)){
this.editedata.push(e.specialization)}
else{
  this.editedata=this.editedata.filter((h:any)=>h!=e.specialization)
}
   }




   submit(){
     this.editedata.forEach((e:any) => {
       this.finalstore.push({mail:sessionStorage.getItem('mail'),technology:e})
     });
    
     this.http.post<any>('http://localhost:4000/student/postspecification',this.finalstore).subscribe(
      response=>{
     this.stored=true
        },
        error=>console.log(error)
    
     );
   }



  ngOnInit(): void {
   
  }

}
