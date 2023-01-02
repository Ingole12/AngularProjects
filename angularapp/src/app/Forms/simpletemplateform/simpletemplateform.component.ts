import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator, NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/CRUD/firebase.service';
import { Emplyoee } from 'src/app/models/employee';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {
  defaultvalue = 'Angular';
  employee = new Emplyoee();
  submitted: boolean = false;
  genderdefault: string = 'Male';
  // genderss:string;

  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' }
  ]
  constructor(private _firebase: FirebaseService) { }

  ngOnInit() {
    this._firebase.getDataTempRegiFormFirebase().subscribe(res=>{
      console.log(`Registration TemplateForm Data On FB DB:`,res);
      
    })
  }

  empdata: Emplyoee;
  OnSubmit(form: NgForm) {
    this.submitted = true;

    this.employee.course = form.value.Course;
    this.employee.username = form.value.userDetails.username;
    this.employee.email = form.value.userDetails.email;
    this.employee.gender = form.value.genderss;
    form.reset();
    form.controls['Course'].setValue('Angular');
    form.controls['genderss'].setValue('Male');
    console.log(form.controls);
    
    this._firebase.PostTempRegForm(this.employee).subscribe(data=>{
      console.log(`Template Driven Registration  Data From FB DB :`,data);
    })

    this.saveEmployeeData(this.employee)
  }

  saveEmployeeData(emp: Emplyoee) {
    // console.log(emp.course);
    // console.log(`${emp.email} ${emp.username}`);
  }

}
