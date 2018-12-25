import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BoxEffects } from './box.effects';

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
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
