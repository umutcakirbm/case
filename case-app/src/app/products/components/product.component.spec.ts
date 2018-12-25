import {ProductComponent} from "./product.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Product} from "../models/product";

describe('Product Component', () => {
  let fixture: ComponentFixture<ProductComponent>;
  let instance: ProductComponent;
  let nativeElement: Element;
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ProductComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ProductComponent);
    instance = fixture.debugElement.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    product = {
      id: '1',
      name: 'test',
      price: 2.893,
      detail: 'testDetail'
    }
  });

  it('should show product name as \'test\'', () => {
    instance.product = product;
    fixture.detectChanges();
    expect((nativeElement.querySelector('.card-title a') as HTMLAnchorElement).innerText).toEqual('test');
  });

  it('should show product price as \'$2.89\'', () => {
    instance.product = product;
    fixture.detectChanges();
    expect((nativeElement.querySelector('h5') as HTMLHeadingElement).innerText).toEqual('$2.89');
  });

  it('should show product detail as \'testDetail\'', () => {
    instance.product = product;
    fixture.detectChanges();
    expect((nativeElement.querySelector('.card-text') as HTMLDivElement).innerText).toEqual('testDetail');
  });

  it('should emit an event if the addToBox button is clicked', () => {

    spyOn(instance.addToBoxEvent, 'emit');
    instance.addToBox(product);

    expect(instance.addToBoxEvent.emit).toHaveBeenCalledWith(product);
  });

});
