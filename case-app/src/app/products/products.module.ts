import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from "./products-routing.module";
import { BoxComponent } from "./containers/box.component";
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { BoxEffects } from './effects/box.effects';
import { ListEffects } from './effects/list.effects';
import { ProductService } from "./services/product.service";
import { ListComponent } from "./containers/list.component";
import { ProductComponent } from "./components/product.component";

export const COMPONENTS = [
  ProductComponent,
  BoxComponent,
  ListComponent
];

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', fromState.reducers),
    EffectsModule.forFeature([BoxEffects, ListEffects])
  ],
  declarations: COMPONENTS,
  providers: [
    ProductService
  ]
})
export class ProductsModule {}
