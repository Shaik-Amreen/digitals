import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {


  
  navMode=true;
  username=localStorage.getItem('username')
role:any=[]
  constructor(private http:HttpClient,private router:Router) {
this.role=localStorage.getItem('role')?.split(',')
   
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
