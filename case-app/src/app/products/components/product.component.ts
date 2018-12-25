import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../models/product";

@Component({
  selector: 'app-product',
  template: `
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{ product?.name }}</a>
        </h4>
        <h5>\${{ product?.price?.toFixed(2) }}</h5>
        <p class="card-text">{{ product?.detail }}</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-muted"><a class="btn btn-block btn-primary" href="javascript:;" (click)="addToBox(product)">Sepete Ekle</a></small>
      </div>
    </div>
  `
})
export class ProductComponent {

  @Input() product: Product;
  @Output() addToBoxEvent: EventEmitter<any>;

  constructor() {
    this.addToBoxEvent = new EventEmitter<any>();
  }

  addToBox(product) {
    this.addToBoxEvent.emit(product);
  }
}
