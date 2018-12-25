import { Action } from '@ngrx/store';
import { Product } from "../models/product";

export enum ListActionTypes {
  GetProducts = '[List] Get Products',
  LoadProducts = '[List] Load Products',
  GetProductsError = '[List] Get Products Error'
}

export class GetProducts implements Action {
  readonly type = ListActionTypes.GetProducts;
}

export class LoadProducts implements Action {
  readonly type = ListActionTypes.LoadProducts;
  constructor(public payload: { products: Product[] }) {}
}

export class GetProductsError implements Action {
  readonly type = ListActionTypes.GetProductsError;
  constructor(public payload: { error: string }) {}
}

export type ListActions = GetProducts | LoadProducts | GetProductsError;
