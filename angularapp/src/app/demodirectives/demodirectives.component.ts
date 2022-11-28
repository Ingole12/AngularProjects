import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow:boolean=false;

  title:string="Top 3 Movies";

  movies:Movie[]=[
    {title:'3 Idiots',director:'Rajkumar',cast:'Amir',releseDate:'2007'},
    {title:'Kantara',director:'Rishab',cast:'Rishab',releseDate:'2022'},
    {title:'KGF',director:'RokyBhai',cast:'Yash',releseDate:'2019'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
