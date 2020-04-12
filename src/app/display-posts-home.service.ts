import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from './post.model';

@Injectable()
export class DisplayPostsHomeService {

  constructor(private firestore: AngularFirestore) { }

  getPosts() {
    return this.firestore.collection('Posts').snapshotChanges();
}
}