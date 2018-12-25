import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from "./products-routing.module";
import { BoxComponent } from "./containers/box.component";

export const COMPONENTS = [
  BoxComponent
];


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: COMPONENTS
})
export class ProductsModule {}
