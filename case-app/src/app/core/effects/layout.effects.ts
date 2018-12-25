import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LayoutActionTypes, NavigatedToBox, NotNavigatedToBox } from "../actions/layout.actions";
import { exhaustMap, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class LayoutEffects {

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect()
  navigateToBox$ = this.actions$.pipe(
    ofType(LayoutActionTypes.NavigateToBox),
    exhaustMap(() =>
      this.router.navigate(['products/box'])
        .then(() => new NavigatedToBox())
        .catch((error) => new NotNavigatedToBox({ error: error.toString() }))
    )
  );

  @Effect({ dispatch: false })
  navigatedToBox$ = this.actions$.pipe(
    ofType(LayoutActionTypes.NavigatedToBox, LayoutActionTypes.NotNavigatedToBox),
    tap(() => { })
  );

}
