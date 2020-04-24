import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DisplayPostsHomeService } from './display-posts-home.service';
import { Post } from './Models/post.model';

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

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  posts: Post[];

// you initialize a service in the constructor of the component
// https://dzone.com/articles/what-is-a-service-in-angular-js-why-to-use-it
  constructor(private displayPostsHomeService: DisplayPostsHomeService) {
    this.captures = [];
  }

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

  
  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            //this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        });
    }
  }

  public capture() {
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }
}
