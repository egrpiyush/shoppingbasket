import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service'
import { CheckoutService } from '../../../services/checkout/checkout.service'
import { Product } from '../../../models/product';
import { CartItem } from '../../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal = 0;

  constructor(private message: CartService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit() {

    this.cartItems = this.checkoutService.CartItems;
    this.message.getAddToCart().subscribe((product: Product) => {
      this.addToCart(product);
    });
  }

  onSubmit(){
    this.checkoutService.CartItems = this.cartItems;
    this.router.navigate(['/checkout']);
  }

  addToCart(product: Product){
    let productExists = false;

    for (let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].quantity++; 
        productExists = true;
        break;
      }
    }

    if (!productExists){
      this.cartItems.push(new CartItem(product.id, product.name, product.price, 1, product.description));     
    }

    this.cartItems.forEach(p => {
      this.cartTotal += (p.quantity * p.price);
    })
  }

}
