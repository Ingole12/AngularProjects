import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService, private _route:Router) { }

  ngOnInit() {
  }
 
  checkUser(uname,password){
       var output= this._auth.checkUserNameAndPassword(uname,password);

       if (output== true) {
        this._route.navigate(['product']);
        window.alert('Login Successfully');

       }
       else{
        window.alert('Invalid User Name Or Password');
       }

  }
}
 