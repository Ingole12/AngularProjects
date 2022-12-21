import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL='https://jsonplaceholder.typicode.com/';
newarray:any=[
  {name:'Laptop',id:'101'},
  {name:'Mobile',id:'102'},
  {name:'TV',id:'103'}
]
  constructor(private http:HttpClient) {  }
  //This method will return the api data 
  getUserData()
  {
    let user='users';
   return this.http.get(this.apiURL+user);
  }
  getPost(){
    let post='posts';
   return this.http.get(this.apiURL+post);
  }

  display(){
    alert('Hello Service called');
  }
}
