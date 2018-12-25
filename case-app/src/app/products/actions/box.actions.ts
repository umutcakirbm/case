import { Action } from '@ngrx/store';
import {ProductBoxModel} from "../models/product-box.model";

export enum BoxActionTypes {
  UpsertProduct = '[Box] Upsert Product',
  DeleteProduct = '[Box] Delete Product',
  ClearProducts = '[Box] Clear Products'
}

export class UpsertProduct implements Action {
  readonly type = BoxActionTypes.UpsertProduct;
  constructor(public payload: { product: ProductBoxModel, decremental?: boolean }) {}
}

export class DeleteProduct implements Action {
  readonly type = BoxActionTypes.DeleteProduct;

  constructor(public payload: { id: string }) {}
}

export class ClearProducts implements Action {
  readonly type = BoxActionTypes.ClearProducts;
}

export type BoxActions =
  UpsertProduct
  | DeleteProduct
  | ClearProducts;
