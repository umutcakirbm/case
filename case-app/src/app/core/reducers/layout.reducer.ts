import { Action } from '@ngrx/store';
import {LayoutActions, LayoutActionTypes} from "../actions/layout.actions";


export interface State {
  navigatingToBox: boolean;
  error: string;
}

export const initialState: State = {
  navigatingToBox: false,
  error: null
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.NavigateToBox:
      return {
        ...state,
        navigatingToBox: true,
        error: null
      };
    case LayoutActionTypes.NavigatedToBox:
      return {
        ...state,
        navigatingToBox: false,
        error: null
      };
    case LayoutActionTypes.NotNavigatedToBox:
      return {
        ...state,
        navigatingToBox: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const getNavigatingToBox = (state: State) => state.navigatingToBox;
export const getError = (state: State) => state.error;
