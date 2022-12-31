import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeData } from '../save-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit,SafeData {


  myReactiveForm:FormGroup;
  userName :FormControl =new FormControl();
  constructor() {
    this.createForm();
   }
  isDataSaved(): boolean {
    return !this.myReactiveForm.dirty;
  }
  ngOnInit() {
  }
  
  createForm(){
  this.myReactiveForm  =new FormGroup({
      'userName':new FormControl('')
    })
  }
  Submit(){
    console.log(this.myReactiveForm);
    
  }
}
