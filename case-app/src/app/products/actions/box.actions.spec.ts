import {ClearProducts, DeleteProduct, UpsertProduct} from './box.actions';

describe('Box Actions', () => {
  it('should create an UpsertProduct instance', () => {
    expect(new UpsertProduct({ product: null })).toBeTruthy();
  });

  it('should create an DeleteProduct instance', () => {
    expect(new DeleteProduct({ id: '' })).toBeTruthy();
  });

  it('should create an ClearProducts instance', () => {
    expect(new ClearProducts()).toBeTruthy();
  });
});
