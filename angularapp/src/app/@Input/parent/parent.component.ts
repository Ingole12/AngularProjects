import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { Movie } from 'src/app/models/movies';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
 movies:any=[{
    title:'Baahubali',
    director:'S. S. Rajamouli',
    releseDate:'2015',
        cast:'Prabhas'
  }]

  constructor() {
   }

  ngOnInit() {
    console.log(this.movies);
    
  }

  cour:Courses[]=[{courseName: "SEO",courseDuration:"3-Month's",courseEligibility:"Min 12 pass",fee:20000},
  {courseName: "Machine Learning",courseDuration:"8-Month's",courseEligibility:"Min Graduate pass",fee:20000},
  {courseName: "Cloud Computing",courseDuration:"4-Month's",courseEligibility:"Min Graduate pass",fee:20000},
  {courseName: "Big Data",courseDuration:"6-Month's",courseEligibility:"Min Graduate pass",fee:20000}
]

}
 


// export class Movies {
//   mName:string='Baahubali';
//   director:string='S. S. Rajamouli';
//   procuction:string='Arka Media Works';
//   cast:string='Prabhas';
//  }
 
// let movieobj=new Movies();


