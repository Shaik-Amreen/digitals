import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  
  navMode=true;
  username=localStorage.getItem('username')
available:any=false
  constructor(private http:HttpClient,private router:Router) {

    this.http.post<any>('http://localhost:4000/stationer/records','').subscribe(
      res=>{
        
        if(res[res.length-1].recordsavailable=="yes"){this.available=true}
        },
        err=>console.log(err)
    
     );
    
    
   }
   
  ngOnInit(): void {
  }


  logout(){
    sessionStorage.removeItem('mail');
    localStorage.clear();
    this.router.navigate(['/'])
  }
  

  changeNav(){
    this.navMode=!this.navMode
  }
}
