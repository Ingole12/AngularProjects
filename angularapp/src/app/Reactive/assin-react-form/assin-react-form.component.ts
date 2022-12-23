import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assin-react-form',
  templateUrl: './assin-react-form.component.html',
  styleUrls: ['./assin-react-form.component.css']
})
export class AssinReactFormComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.myReactiveForm = new FormGroup({
      'projectName': new FormControl('', [Validators.required], this.Naprojet.bind(this)),
      // , this.projectName.bind(this)
      'email': new FormControl('', [Validators.email, Validators.required]),
      'projectStatus': new FormControl('Select')

    });
  }

  submit() {
    console.log(this.myReactiveForm);
  }
  // projectName(control: FormControl) {
  //   if (control.value === 'Test') {
  //     return { 'nameNotAllowed': true }
  //   }
  // }

  Naprojet(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setInterval(() => {
        if (control.value == 'Test') {
          resolve({ 'nameNotAllowed': true });
          setTimeout(() => {
            this.myReactiveForm.patchValue({
              'projectName': 'Codemind1122'
            })
          },10000 )
        }
        else {
          resolve(null);
        }
      }, 2000);
    })
    return myResponse;
  }
}
