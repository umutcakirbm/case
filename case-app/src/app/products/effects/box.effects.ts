import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from "rxjs/operators";
import {BoxActionTypes} from "../actions/box.actions";


@Injectable()
export class BoxEffects {

  constructor(
    private actions$: Actions
  ) {}

  @Effect({ dispatch: false })
  upsertProduct$ = this.actions$.pipe(
    ofType(BoxActionTypes.UpsertProduct),
    tap((action: { payload: { product, decremental }}) => {})
  );
}
