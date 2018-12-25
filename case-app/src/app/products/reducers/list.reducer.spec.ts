import { reducer, initialState } from './list.reducer';
import {Product} from "../models/product";
import {GetProductsError, LoadProducts} from "../actions/list.actions";

describe('List Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should return the same products input for LoadReducers to result state', () => {
    const product1 = {
      id: 'product-1',
      name: 'Product 1',
      price: 32.24,
      detail: 'Product 1 detail'
    } as Product;
    const product2 = {
      id: 'product-2',
      name: 'Product 2',
      price: 14.23,
      detail: 'Product 2 detail'
    } as Product;
    const products = [product1, product2];
    const action = new LoadProducts({ products });
    const result = reducer(initialState, action);
    expect(result.products).toBe(products);
  });

  it('should return the same error input for GetProductsError to result state', () => {
    const action = new GetProductsError({ error: 'test' });
    const result = reducer(initialState, action);
    expect(result.error).toBe('test');
  });
});
