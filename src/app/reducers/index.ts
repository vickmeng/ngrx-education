import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as player from './player.reducer';

import * as fromRouter from '@ngrx/router-store';


export interface AppState {
  player: player.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  player: player.reducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];
