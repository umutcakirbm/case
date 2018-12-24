import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "./components/navigation.component";
import { WrapperComponent } from "./components/wrapper.component";
import { FooterComponent } from "./components/footer.component";
import { AppComponent } from "./containers/app.component";

export const COMPONENTS = [
  NavigationComponent,
  WrapperComponent,
  FooterComponent,
  AppComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
