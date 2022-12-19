import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.css']
})
export class ReFormComponent implements OnInit {
  myReactiveForm: FormGroup;
  btndisable:boolean=false;

  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' }
  ];
  notAllowedNames = ['Codemind', 'Technology'];

  constructor(private _fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male'
    //   })
    // }, 3500);


    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails': {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 3500);

  }
  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
    //     'email': new FormControl('', [Validators.required, Validators.email], this.NaEmails)
    //   }),
    //   'Course': new FormControl('Angular', []),
    //   'gender': new FormControl('Male', []),
    //    'skills': new FormArray([
    //     new FormControl(null,Validators.required),
    //    ])
    // })

    this.myReactiveForm = this._fb.group({
      userDetails:this._fb.group({
        username:['',Validators.required],
        email:['',Validators.required]
      }),
      Course:['Angular'],
      gender:['Male'],
      skills:this._fb.array([])
    })
  }

  OnSubmit() {
    this.btndisable=true;
    console.log(this.myReactiveForm);
    // console.log(this.myReactiveForm.get('username').value);
  }
  OnAddSkill(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
  OnRemoveSkill(){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt((<FormArray>this.myReactiveForm.get('skills')).length-1);
  }
  NaNames(control: FormControl) {
    //this.notAllowedNames= api/getNames
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'namesNotAllowed': true }
    }
    return null;
  }
  NaEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({ 'emailNotAllowed': true });
        }
        else {
          resolve(null);
        }
      }, 2000);
    })
    return myResponse;
  }
}
