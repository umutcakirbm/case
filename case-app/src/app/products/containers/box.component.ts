import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as fromProducts from '../reducers';
import {ProductBoxModel} from "../models/product-box.model";
import {DeleteProduct, UpsertProduct} from "../actions/box.actions";

@Component({
  selector: 'app-box',
  template: `
    <h3>Sepet</h3>
    <hr />
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Ürün Adı</th>
        <th scope="col" class="text-center">Birim Fiyatı</th>
        <th scope="col" class="text-center" style="width: 180px;">Adet</th>
        <th scope="col" class="text-center">Toplam Fiyat</th>
        <th scope="col" class="text-right" style="width: 100px;">İşlem</th>
      </tr>
      </thead>
      <tbody>
      <tr [hidden]="(productsOnBox$ | async).length">
        <td colspan="5" class="text-center">Sepetiniz şu anda boş. Ürün listesi için <a [routerLink]="['/']">tıklayın</a></td>
      </tr>
      <tr *ngFor="let product of (productsOnBox$ | async)">
        <th scope="row">{{ product?.product?.name }}</th>
        <td class="text-center">\${{ product?.product?.price?.toFixed(2) }}</td>
        <td>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button" (click)="changeCount(product, true)">-</button>
            </div>
            <input type="text" class="form-control" readonly placeholder="" [value]="product.count">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" (click)="changeCount(product, false)">+</button>
            </div>
          </div>
        </td>
        <td class="text-center">\${{ (product.product.price * product.count).toFixed(2) }}</td>
        <td class="text-right"><button class="btn btn-block btn-outline-danger" (click)="removeProduct(product)">Kaldır</button></td>
      </tr>
      </tbody>
    </table>
  `,
  styles: [`
    h3 { margin-top: 30px; }
  `]
})
export class BoxComponent implements OnInit {

  productsOnBox$;

  constructor(
    private store$: Store<fromProducts.State>
  ) {}

  ngOnInit() {
    this.productsOnBox$ = this.store$.pipe(select(fromProducts.getBoxSelectAll));
  }

  changeCount(product: ProductBoxModel, decremental: boolean) {
    this.store$.dispatch(new UpsertProduct({ product, decremental }));
  }

  removeProduct(product: ProductBoxModel) {
    this.store$.dispatch(new DeleteProduct({ id: product.id }));
  }

}
