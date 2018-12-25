import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromBox from './box.reducer';
import * as fromList from './list.reducer';

export interface ProductState {
  box: fromBox.State;
  list: fromList.State;
}

export interface State extends fromRoot.State {
  products: ProductState;
}

export const reducers: ActionReducerMap<ProductState> = {
  box: fromBox.reducer,
  list: fromList.reducer
};

export const getProductsState = createFeatureSelector<State, ProductState>('products');
export const getProductsBoxState = createSelector(getProductsState, (state: ProductState) => state.box);
export const getProductsListState = createSelector(getProductsState, (state: ProductState) => state.list);

export const {
  selectIds: getBoxSelectIds,
  selectEntities: getBoxSelectEntities,
  selectAll: getBoxSelectAll,
  selectTotal: getBoxSelectTotal,
} = fromBox.adapter.getSelectors(getProductsBoxState);


export const getListProducts = createSelector(getProductsListState, fromList.getProducts);
export const getListProductError = createSelector(getProductsListState, fromList.getError);
