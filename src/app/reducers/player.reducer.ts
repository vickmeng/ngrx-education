import { Action, createSelector } from '@ngrx/store';
import { ActionTypes, Union } from '../actions/player.actions';
import { AppState } from './index';

export interface State {
  playing: boolean;
}

export const initialState: State = {
  playing: false,
};

export function reducer(state = initialState, action: Union): State {
  switch (action.type) {
    case ActionTypes.isPlay:
      return {
        playing: action.payload
      };
    default:
      return state;
  }
}

export const selectFeature = (state: AppState) => state.player;

export const selectFeaturePlaying = createSelector(
  selectFeature,
  (state: State) => state.playing
);
