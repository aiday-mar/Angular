import { Component, OnInit} from '@angular/core';
import { DisplayPostsHomeService } from './display-posts-home.service';
import { Post } from './post.model';

// https://www.intertech.com/Blog/angular-component-tutorial-inputs-outputs-and-eventemitters/

@Component({
  // use this selector to insert the component in other components
  selector: 'my-app',
  // what template to render in association to the component
  templateUrl: './app.component.html',
  // style sheet specific to this component
  styleUrls: [ './app.component.css' ]
})

// the below is a mandatory code part of the angular framework
export class AppComponent implements OnInit {

  posts: Post[];

// you initialize a service in the constructor of the component
// https://dzone.com/articles/what-is-a-service-in-angular-js-why-to-use-it
  constructor(private displayPostsHomeService: DisplayPostsHomeService) { }

// https://www.angularjswiki.com/angular/what-is-the-difference-between-constructor-and-ngoninit-in-angular/
  ngOnInit() {
    // https://stackoverflow.com/questions/44921788/what-is-subscribe-in-angular
    this.displayPostsHomeService.getPosts().subscribe(data => {
      this.posts = data.map(e => {
        // when a post in encountered
        return {
          // the below seems to actually return the id of the post
          id : e.payload.doc.id,
          ...e.payload.doc.data()
        } as Post;
      })
    });
  }
}
