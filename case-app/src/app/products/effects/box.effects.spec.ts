import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import { BoxEffects } from './box.effects';
import {Actions} from "@ngrx/effects";
import {UpsertProduct} from "../actions/box.actions";
import {ProductBoxModel} from "../models/product-box.model";

describe('BoxEffects', () => {
  let actions$: Observable<any>;
  let effects: BoxEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoxEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BoxEffects);
    actions$ = TestBed.get(Actions);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should trigger "upsertProduct$" effect by UpsertProduct action', (done) => {
    const product: { product: ProductBoxModel, decremental: boolean} = {
      product: {
        id: '1',
        count: 0,
        product: null
      },
      decremental: false
    };
    const action = new UpsertProduct(product);

    actions$ = of(action);
    effects.upsertProduct$.subscribe((action) => {
      expect(action.payload).toEqual(product);
      done();
    });
  });
});
