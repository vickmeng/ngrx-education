import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFeature from '../reducers';
import {IsPlay} from '../actions/player.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private store: Store<fromFeature.AppState>) { }

  ngOnInit() {
  }

  onChange() {
    this.store.dispatch(new IsPlay(true));
  }

}
