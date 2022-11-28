import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  txone=document.getElementById('one') ;
  txtwo=document.getElementById('two') ;
  onclick(){
        if (this.txone == this.txtwo) {
          alert('Your Password Successfully Reset');
        }
        else{
          alert('Your Password Not Successfully Reset');
        }
  }
  constructor() { }

  ngOnInit() {
  }

}
