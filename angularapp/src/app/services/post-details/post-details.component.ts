import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html', 
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _postService:PostService,private route:ActivatedRoute) { }
   postDetail:Post[]=[];
  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this._postService.getByPostId(id).subscribe(res=>{
       this.postDetail.push(res);
      console.log(`get Post by id `, res); 
      console.log(`Post Details on Component Variable: ${this.postDetail}`);
      
    })
  }
  deletePost(){
    this._postService.deletePostById(1).subscribe(data=>{
      console.log(data);
      
    })
  }
   
}
