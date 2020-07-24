import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service'
import { Product } from '../../../models/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productsList = this.productService.getProducts();
  }

}
