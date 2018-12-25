import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLayout from '../core/reducers/layout.reducer';
import * as fromBox from "../products/reducers/box.reducer";
import * as fromList from "../products/reducers/list.reducer";

export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

export function getInitialState() {
  return {
    layout: fromLayout.initialState,
    products: {
      box: fromBox.initialState,
      list: fromList.initialState
    }
  } as State;
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export const getLayoutState = createFeatureSelector<State, fromLayout.State>('layout');
export const getLayoutNavigatingToBox = createSelector(getLayoutState, fromLayout.getNavigatingToBox);
export const getLayoutError = createSelector(getLayoutState, fromLayout.getError);
