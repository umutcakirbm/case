import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from "@angular/router";

describe('AppComponent', () => {

  let router: Router;
  let fixture;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AppComponent);
    instance = fixture.debugElement.componentInstance;

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "products/box" redirects you to /products/box', fakeAsync(() => {
    instance.navigateTo('products/box');
    tick();
    expect(location.pathname).toBe('/products/box');
  }));

});
