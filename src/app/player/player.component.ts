import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromFeaturePlayer from '../reducers/player.reducer';
import {IsPlay} from '../actions/player.actions';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playing$ = this.store.pipe(select(fromFeaturePlayer.selectFeaturePlaying));
  isPlaying: boolean;

  constructor(private store: Store<fromFeature.AppState>) {
  }

  ngOnInit() {
    this.playing$.subscribe(v => this.isPlaying = v);
  }

  onSwitch(isPlaying: boolean) {
    this.store.dispatch(new IsPlay(!isPlaying));
  }

}
