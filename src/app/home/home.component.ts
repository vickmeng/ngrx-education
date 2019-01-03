import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFeature from '../reducers';
import {IsPlay} from '../actions/player.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<fromFeature.AppState>) { }

  ngOnInit() {
  }

  onChange() {
    this.store.dispatch(new IsPlay(true));
  }

}
