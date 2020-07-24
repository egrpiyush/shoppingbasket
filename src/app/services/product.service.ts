import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products : Product[] = [
    new Product(1, "name", "description", 10, ""),
    new Product(2, "name", "description", 20, ""),
    new Product(3, "name", "description", 30, ""),
    new Product(4, "name", "description", 40, ""),
    new Product(5, "name", "description", 10, ""),
    new Product(6, "name", "description", 10, ""),
  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
