import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import {cold} from "jasmine-marbles";
import {Product} from "../models/product";

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProductService
    ]
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('should call the service and return the product results', () => {
    const product1 = {
      id: 'product-1',
      name: 'Product 1',
      price: 32.24,
      detail: 'Product 1 detail'
    } as Product;
    const product2 = {
      id: 'product-2',
      name: 'Product 2',
      price: 14.23,
      detail: 'Product 2 detail'
    } as Product;
    const products = [product1, product2];
    const service = TestBed.get(ProductService);
    const response = cold('-a|', { a: products });
    const expected = cold('-b|', { b: products });
    service.getAll = () => response;

    expect(service.getAll()).toBeObservable(expected);
  });
});
