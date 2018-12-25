import {GetProducts, GetProductsError, LoadProducts} from './list.actions';

describe('List actions', () => {
  it('should create an GetProducts instance', () => {
    expect(new GetProducts()).toBeTruthy();
  });

  it('should create an LoadProducts instance', () => {
    expect(new LoadProducts({ products: [] })).toBeTruthy();
  });

  it('should create an GetProductsError instance', () => {
    expect(new GetProductsError({ error: null })).toBeTruthy();
  });
});
