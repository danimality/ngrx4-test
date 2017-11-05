import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as PostActions from './post.actions'
import { Post } from "./post.reducer";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // message$: Observable<string>;

  post$: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select("post");
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  // spanishMessage() {
  //   this.store.dispatch({type: 'SPANISH'});
  // }
  //
  // frenchMessage() {
  //   this.store.dispatch({type: 'FRENCH'});
  // }
  //
  // germanMessage() {
  //   this.store.dispatch({type: 'GERMAN'});
  // }
  //
  // englishMessage() {
  //   this.store.dispatch({type: 'ENGLISH'});
  // }

}




interface AppState {
  post: Post;
}
