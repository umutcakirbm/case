import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "./components/navigation.component";
import { WrapperComponent } from "./components/wrapper.component";
import { FooterComponent } from "./components/footer.component";
import { AppComponent } from "./containers/app.component";
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './effects/layout.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLayoutState from './reducers';

export const COMPONENTS = [
  NavigationComponent,
  WrapperComponent,
  FooterComponent,
  AppComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('layoutState', fromLayoutState.reducers),
    EffectsModule.forFeature([LayoutEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
