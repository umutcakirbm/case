import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import * as fromProduct from '../reducers';
import { GetProducts } from "../actions/list.actions";
import { State } from "../../reducers";
import { UpsertProduct } from "../actions/box.actions";

@Component({
  selector: 'app-list',
  template: `
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" *ngFor="let product of (products$ | async)">
        <app-product
          [product]="product"
          (addToBoxEvent)="upsertToBox(product)">
        </app-product>
      </div>
    </div>
  `,
  styles: [`
    .row { margin-top: 30px; }
  `]
})
export class ListComponent implements OnInit {

  products$;

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.products$ = this.store.pipe(select(fromProduct.getListProducts));
    this.store.dispatch(new GetProducts());
  }

  upsertToBox(product) {
    this.store.dispatch(new UpsertProduct({ product: { product, count: 1 } }));
  }

}
