import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayPostsHomeService } from '../display-posts-home.service';
import { Post } from '../Models/post.model';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  postID : string;
  post : Post;

  // dependency injections for the route and for the service for displaying posts
  constructor(private _Activatedroute:ActivatedRoute, private displayPostsHomeService: DisplayPostsHomeService) {}

  ngOnInit() {
  
    // get the ID which was passed in the url  
    this._Activatedroute.paramMap.subscribe(params => { 
      this.postID = params.get('id'); 
    });

    this.displayPostsHomeService.getPost(this.postID).subscribe(data => {
      this.post = data.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data()
        } as Post;
      })
    });
  }

}