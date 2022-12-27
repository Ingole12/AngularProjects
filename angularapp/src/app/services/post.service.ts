import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


getPosts(): Observable<any>{
  return  this.http.get(`${devAPIurl}posts`);
}
getByPostId(id):Observable<any>{
   return this.http.get(`${devAPIurl}posts/`+ id);
}
}
