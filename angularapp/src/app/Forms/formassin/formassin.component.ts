import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { $ } from 'protractor';
import { RegiForm } from 'src/app/models/employee';

@Component({
  selector: 'app-formassin',
  templateUrl: './formassin.component.html',
  styleUrls: ['./formassin.component.css']
})
export class FormassinComponent implements OnInit {
  gender = [
    { 'id': 1, 'name': 'Male' },
    { 'id': 3, 'name': 'Female' },
    { 'id': 3, 'name': 'Other' }
           ];

  citye: string = 'Mumbai';
  defgender: string = 'Male';
  regiFormobj = new RegiForm();

  constructor() {
    this.crateFor();
               }
  ngOnInit() {}
  newarray: any = [];
  validvar: boolean = false;
  OnSubmit(form: NgForm) {
    console.log(form);
    console.log(this.regiFormobj);

    this.regiFormobj.fname = form.value.firstName;
    this.regiFormobj.lname = form.value.lastName;
    this.regiFormobj.age = form.value.age;
    this.regiFormobj.email = form.value.email;
    this.regiFormobj.phone = form.value.phone;
    this.regiFormobj.city = form.value.city;
    this.regiFormobj.gender = form.value.gen;
    this.regiFormobj.password = form.value.password;
    this.regiFormobj.cpassword = form.value.cPassword;

    if (form.valid) {
      this.validvar = true;
    }
    this.newarray.push(form.value);
    console.log(this.newarray);
    form.reset();
  }

  //           Reactive From Methods and variables start hear
  reactiveForm: FormGroup;
  reactiveFormarray = [];
  showtable:boolean=false;

  crateFor() {
    this.reactiveForm = new FormGroup({
      'fName': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
      'lName': new FormControl('', [Validators.maxLength(10)]),
      'age': new FormControl('', [Validators.required, Validators.min(17), Validators.max(20), Validators.pattern('[0-9]{2}$')]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.maxLength(10), Validators.pattern('[0-9]{10}$')]),
      'city': new FormControl('', []),
      'gender': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'cpassword': new FormControl('', [Validators.required])

    })
  }

  Onclick() {
    if (this.reactiveForm.valid) {
      this.showtable=true;
    }
    this.reactiveFormarray.push(this.reactiveForm.value);
    console.log(this.reactiveForm);
    console.log(this.reactiveFormarray);
  }
}


