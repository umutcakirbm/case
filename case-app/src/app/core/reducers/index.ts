import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromLayout from './layout.reducer';

export interface State extends fromRoot.State{
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
};

export const selectLayoutState = createFeatureSelector<State, fromLayout.State>('layout');
export const getLayoutNavigatingToBox = createSelector(selectLayoutState, fromLayout.getNavigatingToBox);
export const getLayoutError = createSelector(selectLayoutState, fromLayout.getError);
