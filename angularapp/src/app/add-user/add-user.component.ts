import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeData } from '../save-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit,SafeData {


  userName :FormControl =new FormControl();
  constructor() {
   }
  isDataSaved(): boolean {
    return !this.userName.dirty;
    // throw new Error('Method not implemented.');
  }
  ngOnInit() {
  }
  
}
