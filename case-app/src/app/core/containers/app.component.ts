import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { NavigateToBox } from "../actions/layout.actions";
import * as fromProducts from "../../products/reducers";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation
      [differentProductCount]="productsOnBox$ | async"
      (navigateToBoxEvent)="navigateToBox()">
    </app-navigation>
    <app-wrapper>
      <router-outlet></router-outlet>
    </app-wrapper>
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit{
  productsOnBox$: any;

  constructor(
    private store: Store<fromProducts.State>
  ) {}

  ngOnInit() {
    this.productsOnBox$ = this.store.pipe(select(fromProducts.getBoxSelectTotal));
  }

  navigateToBox() {
    this.store.dispatch(new NavigateToBox());
  }
}
