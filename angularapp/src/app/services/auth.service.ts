import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkUserNameAndPassword(username:string,pwd:string){
        if (username == "admin" && pwd== "admin1" ) {
          // localStorage.setItem('username','admin');
          sessionStorage.setItem('username','admin');
          return true;
        }
        else{
          return false;
        }
  }
}
 