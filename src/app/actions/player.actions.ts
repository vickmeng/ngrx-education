import { Action } from '@ngrx/store';

export enum ActionTypes {
  isPlay = '[Player Component] isPlay',
}
export class IsPlay implements Action {
  readonly type = ActionTypes.isPlay;
  constructor(public payload: boolean) {}
}

export type Union = IsPlay;

