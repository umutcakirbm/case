import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  NavigateToBox = '[Layout] Navigate To Box',
  NavigatedToBox = '[Layout] Navigated To Box',
  NotNavigatedToBox = '[Layout] Not Navigated To Box'
}

export class NavigateToBox implements Action {
  readonly type = LayoutActionTypes.NavigateToBox;
}

export class NavigatedToBox implements Action {
  readonly type = LayoutActionTypes.NavigatedToBox;
}

export class NotNavigatedToBox implements Action {
  readonly type = LayoutActionTypes.NotNavigatedToBox;
  constructor(public payload: { error: string }) {}
}

export type LayoutActions = NavigateToBox
  | NavigatedToBox
  | NotNavigatedToBox;
