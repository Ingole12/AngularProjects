import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url='https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  url1='https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=AE&locale=en_GB&hotel_id=1105156';
  constructor(private _http:HttpClient) { }
  
  //getDataBBFinance from  rapidapi url in that the the bbfinance data 
  getDataBBFinance():Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '14dbc41b43mshe99e187ac076267p15d131jsn6122d3ba1468'
    });
  return this._http.get(this.url,{headers:headers});
  }
 

  //getDataHotelCom form rapidapi url in that the Hotel Com API URL
  params1: {domain: 'AE', locale: 'en_GB', hotel_id: '1105156'}
  getDataHotelCom():Observable<any>{
    
    let header= new HttpHeaders({
      'X-RapidAPI-Key': '14dbc41b43mshe99e187ac076267p15d131jsn6122d3ba1468',
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
    })
    return this._http.get(`${this.url1}`,{headers:header});
  }

}
  
