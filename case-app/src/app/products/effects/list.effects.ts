import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import { GetProductsError, ListActionTypes, LoadProducts } from "../actions/list.actions";
import { of } from "rxjs";


@Injectable()
export class ListEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType(ListActionTypes.GetProducts),
    exhaustMap(() =>
      this.productService.getAll().pipe(
        map(products => new LoadProducts({ products })),
        catchError(error => of(new GetProductsError({ error })))
      )
    )
  );

}
