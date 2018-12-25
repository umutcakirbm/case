import { LoadProducts } from './box.actions';

describe('Box Actions', () => {
  it('should create an LoadProducts instance', () => {
    expect(new LoadProducts({ products: []})).toBeTruthy();
  });
});
