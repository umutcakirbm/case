import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {Observable} from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import { ListEffects } from './list.effects';
import {Actions} from "@ngrx/effects";
import {Product} from "../models/product";
import {GetProducts, LoadProducts} from "../actions/list.actions";
import {ProductService} from "../services/product.service";

describe('ListEffects', () => {
  let actions$: Observable<any>;
  let effects: ListEffects;
  let productService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: { getAll: () => {} },
        },
        ListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ListEffects);
    actions$ = TestBed.get(Actions);
    productService = TestBed.get(ProductService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return product list.LoadProducts, with the products, on success', () => {
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
    const action = new GetProducts();
    const completion = new LoadProducts({ products });

    actions$ = hot('-a---', { a: action });
    const response = cold('-a|', { a: products });
    const expected = cold('--b', { b: completion });
    productService.getAll = () => response;

    expect(effects.getProducts$).toBeObservable(expected);
  });
});
