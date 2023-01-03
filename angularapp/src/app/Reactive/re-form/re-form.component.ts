import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
import { from, interval, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/CRUD/firebase.service';
import { firebase } from 'src/app/models/firebase';

import { map, catchError, filter, toArray, take, takeLast } from 'rxjs/operators';
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

  constructor(private _fb:FormBuilder,private _firebase:FirebaseService) {
    this.createForm();
  }

  ngOnInit() {

   // to convert simple array into observable by using Rxjs
    const data=from(this._firebase.user);

    // pipe is method of observable to combine multiple functional operators 
    // data.pipe( map(x=>x.Name+" "+data)).subscribe(res =>{
    //   console.log(`Result of array After using rxjs operator:`,res);
      
    // })

// Filter Operator
    data.pipe(
      filter(u=>u.gender == 'Male'),
      toArray()
    ).subscribe(res=>{
      console.log(`Filter Operator`,res);
      
    })

   // Take operator
    // const sourse=interval(1000);
    // sourse.pipe(
    //   take(5)).subscribe(res=>{
    //   console.log(`Interval Example`,res);
      
    // })
    
   
    // Take last 
    let randomName = ['Rahul','Angular','Java','Python','Data Science'];

    const sourse=from(randomName);

    sourse.pipe(
      takeLast(2)
    ).subscribe(res=>{
      console.log(`Tack Last Operator`, res);
      
    })

    
    // let getarray=[];
    // this._firebase.getPostsDataFirebase().pipe(
    //   map(responseData => {
    //     // empty array
    //     const postArray = [];
    //     //  for in loop
    //    for (const key in responseData) {
    //     //   check key
    //          if (responseData.hasOwnProperty(key)) {
    //           // push new value in to array
    //               postArray.push({...responseData[key], id:key});
    //          }
    //     }
    //     return postArray;
      
    //   })
    // ).subscribe(res=>{
    //   console.log(`Reactive Learning ReactiveForm Data On FB DB After using rxjs operator:`,res); 
    //     getarray=res;
    //     console.log(getarray);
        
    // })



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


  getData(){

    let getarray=[];
    this._firebase.getPostsDataFirebase().pipe(
      map(responseData => {
        // empty array
        const postArray = [];
        //  for in loop
       for (const key in responseData) {
        //   check key
             if (responseData.hasOwnProperty(key)) {
              // push new value in to array
                  postArray.push({...responseData[key], id:key});
             }
        }
        return postArray;
      
      })
    ).subscribe(res=>{
      console.log(`Reactive Learning ReactiveForm Data On FB DB After using rxjs operator:`,res); 
        getarray=res;
        console.log(getarray);
        
    })
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

  firebasePost:firebase;
  OnSubmit() {
    this.btndisable=true;
    // console.log(this.myReactiveForm.value);
    this.firebasePost= new firebase;
     this.firebasePost=this.myReactiveForm.value;
    // console.log(this.firebasePost);

    // this.firebasePost.userName=this.myReactiveForm['controls'].userDetails['controls'].username.value;
    //  this.firebasePost.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
    //  this.firebasePost.course=this.myReactiveForm['controls'].Course.value;
    //  this.firebasePost.gender=this.myReactiveForm['controls'].gender.value;
    //  this.firebasePost.skills=this.myReactiveForm['controls'].skills.value;
    //  console.log(this.firebasePost);

    //pasing data to database using firebase service 
     this._firebase.createPostDataReactiveForm(this.firebasePost).subscribe(res=>{
      console.log(`Post from reactive From :`,res);
      
     })
    // console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);
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

  createPost1(){
    this._firebase.createPost().subscribe(res=>{
      console.log(`Hard coded post Data From FB DB -:`,res); 
    })
  }
}

