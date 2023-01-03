import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebase } from '../models/firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  url='https://angular-crud-f052e-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient) { }
   
  user:any[]=[
    {id:'101', Name:'Rahul',gender:'Male'},
    {id:'102',Name:'Dada',gender:'Male'},
    {id:'103',Name:'Jack',gender:'Male'},
    {id:'104',Name:'Haramayni',gender:'Female'}
  ]

  createPost(){
    let postData={
      title:'this is Angular CRUD',
      content:'This is Firebase application crud operation with post'
    }

  return  this._httpClient.post(this.url + 'posts.json',postData);
  }
 
  //----------------------------- Post data ReactiveForm Learning to Firebase DataBase------------------------------------------------
  createPostDataReactiveForm(data){
      // console.log(`From re-form : `,data);
    return this._httpClient.post(this.url + "Learningpost.json",data);
  }
 
  //Get data From Firebase DataBase only  ReactiveForm Learning
  getPostsDataFirebase():Observable<any>{
    return this._httpClient.get(this.url+ 'Learningpost.json');
  }


  //------------------------------- Post data ReactiveForm Registration to Firebase DataBase-------------------------------------------
  PostDataRegistrationForm(data){
    // console.log(`From re-form Registration : `,data);
  return this._httpClient.post(this.url + "Registration.json",data);
}

//Get data From Firebase DataBase only  ReactiveForm Registration
getDataRegiFormFirebase(){
  return this._httpClient.get(this.url+ 'Registration.json');
}


 //------------------------------- Post data TemplateDrivenForm Registration to Firebase DataBase-------------------------------------------
 PostTempRegForm(data){
  // console.log(`From TemplateDriven-form Registration : `,data);
return this._httpClient.post(this.url + "TemplateDriven_Registration.json",data);
}

//Get data From Firebase DataBase only  ReactiveForm Registration
getDataTempRegiFormFirebase(){
return this._httpClient.get(this.url+ 'TemplateDriven_Registration.json');
}

}
