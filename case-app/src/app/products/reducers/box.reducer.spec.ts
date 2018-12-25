import { reducer, initialState } from './box.reducer';
import {UpsertProduct} from "../actions/box.actions";

describe('Box Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('s product count should equal to 1 if new product upsert to box', () => {
    const action = new UpsertProduct({product: { id: 'product1', count: 1, product: {
          id: 'product1',
          name: '',
          price: 0,
          detail: ''
        } }});
    const result = reducer(initialState, action);
    expect(result.entities['product1'].count).toBe(1);
  });

  it('should decrement if existing product count decrement from the box', () => {
    const product = {
      id: 'product1',
      count: 1,
      product: {
        id: 'product1',
        name: '',
        price: 0,
        detail: ''
      }
    };
    const actionTmp = new UpsertProduct({ product });
    let state;
    state = reducer(initialState, actionTmp);
    state = reducer(state, actionTmp);
    state = reducer(state, actionTmp);
    const action = new UpsertProduct({ product, decremental: true });
    const result = reducer(state, action);
    expect(result.entities['product1'].count).toBe(2);
  });

  it('should increment if existing product count increment from the box', () => {
    const product = {
      id: 'product1',
      count: 1,
      product: {
        id: 'product1',
        name: '',
        price: 0,
        detail: ''
      }
    };
    const action = new UpsertProduct({ product });
    let state;
    state = reducer(initialState, action);
    state = reducer(state, action);
    const result = reducer(state, action);
    expect(result.entities['product1'].count).toBe(3);
  });

  it('should not equal to 0 if existing product count decrement from the box', () => {
    const product = {
      id: 'product1',
      count: 1,
      product: {
        id: 'product1',
        name: '',
        price: 0,
        detail: ''
      }
    };
    const action = new UpsertProduct({ product });
    let state;
    state = reducer(initialState, action);
    const actionLast = new UpsertProduct({ product, decremental: true });
    const result = reducer(state, actionLast);
    expect(result.entities['product1'].count).toBe(1);
  });
});
