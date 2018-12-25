import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { LayoutEffects } from './layout.effects';
import { Actions } from "@ngrx/effects";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { NavigateToBox } from "../actions/layout.actions";

describe('LayoutEffects', () => {
  let actions$: Observable<any>;
  let effects: LayoutEffects;
  let routerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        LayoutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LayoutEffects);
    actions$ = TestBed.get(Actions);
    routerService = TestBed.get(Router);

    spyOn(routerService, 'navigate').and.callThrough();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch a RouterNavigation action when layout.NavigateToBox is dispatched', (done: any) => {
    const action = new NavigateToBox();

    actions$ = of(action);
    effects.navigateToBox$.subscribe(() => {
      expect(routerService.navigate).toHaveBeenCalledWith(['products/box']);
      done();
    });

  });
});
