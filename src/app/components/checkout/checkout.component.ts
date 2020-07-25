import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout/checkout.service'
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  cartItems: CartItem[] = [];
  cartTotal = 0;
  deliveryFee = 0;
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    console.log(this.checkoutService.CartItems);
    this.cartItems = this.checkoutService.CartItems;
    this.cartItems.forEach(p => {
      this.cartTotal += (p.quantity * p.price);
    })
    this.cartTotal += this.deliveryFee;
  }

}
