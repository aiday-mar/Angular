import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// import the firebase related packages

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

// when you rename services you need to rename them also in the app module
import { DisplayPostsHomeService } from './display-posts-home.service';

// for routing
import { RouterModule, Router } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { PostdetailsComponent } from './postdetails/postdetails.component'
import { appRoutingModule } from './app.routing';

const firebaseConfig = {
  apiKey: "AIzaSyDJhXQWXEymyZO2tySmhqlWQnOhuBVijZ8",
  authDomain: "appdata-67dc1.firebaseapp.com",
  databaseURL: "https://appdata-67dc1.firebaseio.com",
  projectId: "appdata-67dc1",
  storageBucket: "appdata-67dc1.appspot.com",
  messagingSenderId: "812140894208",
  appId: "1:812140894208:web:54ecab7dfdcdae5fc560e5",
  measurementId: "G-6PFMMHEC8H"
};

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),

    // firease imports
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    // other imports
    ReactiveFormsModule,
    
    RouterModule.forRoot([

      // default component is the AppComponent
      { path: '', component: AppComponent },
      { path: 'post/:postID', component: PostdetailsComponent },
    ])
    
    ],

  declarations: [ AppComponent, HelloComponent, PostdetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DisplayPostsHomeService]
})
export class AppModule { }
