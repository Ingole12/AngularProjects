import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hotel } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
   url="https://crudapp-819af-default-rtdb.firebaseio.com/";
  constructor(private _http:HttpClient) { }

  postHotelData(data:hotel){
    return this._http.post(this.url + 'hotle.json',data);
  }

  getHotelData():Observable<any>{
    return this._http.get(this.url+ 'hotle.json');
  }

  deleteHotelData(id){
     return this._http.delete(this.url+ 'hotle.json',id);
  }
}
