import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product'
import { CartService } from '../../../../services/cart/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.cartService.sendAddToCart(this.productItem);
  }

}
