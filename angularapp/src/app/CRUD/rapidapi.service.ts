import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url='https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private _http:HttpClient) { }

  getDataBBFinance():Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '14dbc41b43mshe99e187ac076267p15d131jsn6122d3ba1468'
    });
  return this._http.get(this.url,{headers:headers});
  }
}

