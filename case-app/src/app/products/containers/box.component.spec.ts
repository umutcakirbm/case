import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxComponent } from './box.component';
import {ProductComponent} from "../components/product.component";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../../reducers";
import {EffectsModule} from "@ngrx/effects";
import {LayoutEffects} from "../../core/effects/layout.effects";
import * as fromState from "../reducers";
import {BoxEffects} from "../effects/box.effects";
import {ListEffects} from "../effects/list.effects";
import {RouterTestingModule} from "@angular/router/testing";
import {ProductService} from "../services/product.service";

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([LayoutEffects, BoxEffects, ListEffects]),
        StoreModule.forFeature('products', fromState.reducers)
      ],
      declarations: [
        ProductComponent,
        BoxComponent
      ],
      providers: [
        ProductService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
