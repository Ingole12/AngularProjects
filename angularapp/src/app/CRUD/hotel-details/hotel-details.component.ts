import { Component, createPlatform, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { hotel } from 'src/app/models/post';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor(private _hotel: HotelService) {
    this.createPlatform();
  }
  getdata: any[] = [];
  ngOnInit() {
    this._hotel.getHotelData().pipe(
      map(responseData => {

        const postArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key]});
          }
        }
        return postArray;
      })).subscribe(res => {
        console.log(`get Data From FBDB:`, res);
this.getdata = res;
console.log(this.getdata);
      
    })
  }

createPlatform(){
  this.myReactiveForm = new FormGroup({
    'id': new FormControl('', []),
    'name': new FormControl('', [Validators.required]),
    'city': new FormControl('Mumbai', [Validators.required]),
    'stars': new FormControl('', [Validators.required])
  })
}

data: hotel;
save(){
  console.log(`my Reactive Form Values `, this.myReactiveForm);
  this.data = new hotel();
  this.data = this.myReactiveForm.value;
  console.log(this.data);
  this._hotel.postHotelData(this.data).subscribe(res => {
    console.log(res);
  })
}

}
