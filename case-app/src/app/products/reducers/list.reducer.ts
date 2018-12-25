import { Product } from "../models/product";
import { ListActions, ListActionTypes } from "../actions/list.actions";

export interface State {
  products: Product[],
  error: string;
}

export const initialState: State = {
  products: [],
  error: null
};

export function reducer(state = initialState, action: ListActions): State {
  switch (action.type) {
    case ListActionTypes.LoadProducts:
      return {
        ...state,
        products: action.payload.products,
        error: null
      };
    case ListActionTypes.GetProductsError:
      return {
        ...state,
        products: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const getProducts = (state: State) => state.products;
export const getError = (state: State) => state.error;
