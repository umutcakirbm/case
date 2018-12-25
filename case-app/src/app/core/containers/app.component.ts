import { Component } from '@angular/core';
import * as fromLayout from '../reducers'
import { Store } from "@ngrx/store";
import { NavigateToBox } from "../actions/layout.actions";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation
      [differentProductCount]="1"
      (navigateToBoxEvent)="navigateToBox()">
    </app-navigation>
    <app-wrapper>
      <router-outlet></router-outlet>
    </app-wrapper>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  productsOnBox$: any;

  constructor(
    private store: Store<fromLayout.State>
  ) {}

  navigateToBox() {
    this.store.dispatch(new NavigateToBox());
  }
}
