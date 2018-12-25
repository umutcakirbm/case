import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { Observable, of } from "rxjs";

@Injectable()
export class ProductService {

  constructor() { }

  getAll(): Observable<Product[]> {
    const mockData: Product[] = [
      {
        id: 'product-1',
        name: 'Product 1',
        price: 32.24,
        detail: 'Product 1 detail'
      },
      {
        id: 'product-2',
        name: 'Product 2',
        price: 14.23,
        detail: 'Product 2 detail'
      },
      {
        id: 'product-3',
        name: 'Product 3',
        price: 132.54,
        detail: 'Product 3 detail'
      },
      {
        id: 'product-4',
        name: 'Product 4',
        price: 61.14,
        detail: 'Product 4 detail'
      },
      {
        id: 'product-5',
        name: 'Product 5',
        price: 42.65,
        detail: 'Product 5 detail'
      },
      {
        id: 'product-6',
        name: 'Product 6',
        price: 88.34,
        detail: 'Product 6 detail'
      }
    ];
    return of(mockData);
  }
}
