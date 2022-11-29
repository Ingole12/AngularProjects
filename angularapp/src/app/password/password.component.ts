import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  password:any=12;
  resetpassword:any;
  vali:boolean;

  onclick() {
    if (this.password == this.resetpassword) {
      this.vali=true;
    }
    else {
     this.vali=false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
