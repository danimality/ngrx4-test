import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select("message");
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

  germanMessage() {
    this.store.dispatch({type: 'GERMAN'});
  }

  englishMessage() {
    this.store.dispatch({type: 'ENGLISH'});
  }

}




interface AppState {
  message: string;
}
