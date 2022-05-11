import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stationary',
  templateUrl: './stationary.component.html',
  styleUrls: ['./stationary.component.css']
})
export class StationaryComponent implements OnInit {
 available=false;savemode="SEND"
  constructor(private http:HttpClient) {
    this.http.post<any>('http://localhost:4000/stationer/records','').subscribe(
      res=>{
        if(res.length>0 && res[0].recordsavailable=="yes"){this.available=true}
        console.log(res)
        },
        err=>console.log(err)
    
     );
   }

  ngOnInit(): void {
  }


  send(i:any){
    this.savemode="SENDING "
    this.http.post<any>('http://localhost:4000/stationer/recordsavailability',{recordsavailable:i}).subscribe(
      res=>{
        
       
        if(i=="yes"){this.available=true;this.savemode="SEND"}
        if(i=="no"){this.available=false;this.savemode="SEND"}
       
        },
        err=>console.log(err)
    
     );
  }

}
