import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-demo-post',
  templateUrl: './demo-post.component.html',
  styleUrls: ['./demo-post.component.css']
})
export class DemoPostComponent implements OnInit {

  constructor(private _postData:PostService) { }
  getpostsdata: Post[]=[];
  
  ngOnInit() {
    this._postData.getPosts().subscribe(data=>{
      // console.log(`Jason data= ${data}`);
      this.getpostsdata=data;
      console.log(this.getpostsdata);
    })
    
  }

}
