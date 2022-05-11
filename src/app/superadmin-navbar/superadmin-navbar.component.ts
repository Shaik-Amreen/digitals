import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-navbar',
  templateUrl: './superadmin-navbar.component.html',
  styleUrls: ['./superadmin-navbar.component.css']
})
export class SuperadminNavbarComponent implements OnInit {

  navMode=true;
  username=localStorage.getItem('username')

  constructor(private http:HttpClient,private router:Router) {

    
    
    
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
