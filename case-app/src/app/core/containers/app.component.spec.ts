import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { NavigationComponent } from "../components/navigation.component";
import { WrapperComponent } from "../components/wrapper.component";
import { FooterComponent } from "../components/footer.component";
import { ProductsModule } from "../../products/products.module";
import { Router } from "@angular/router";
import { NgModuleFactoryLoader } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "../../reducers";
import {EffectsModule} from "@ngrx/effects";
import {LayoutEffects} from "../effects/layout.effects";

describe('AppComponent', () => {

  let router;
  let location;
  let fixture;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([LayoutEffects]),
      ],
      declarations: [
        NavigationComponent,
        WrapperComponent,
        FooterComponent,
        AppComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    instance = fixture.debugElement.componentInstance;

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "products/box" redirects you to /products/box', fakeAsync(() => {
    router.initialNavigation();

    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: ProductsModule};

    router.resetConfig([
      {path: 'products', loadChildren: 'lazyModule'},
    ]);

    instance.navigateToBox();
    tick();
    fixture.detectChanges();

    expect(location.path()).toBe('/products/box');
  }));

});
