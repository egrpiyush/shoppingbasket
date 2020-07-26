import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;
  deliveryFee = 0;
  constructor(private checkoutService: CheckoutService, private router: Router) {}

  ngOnInit() {
    this.checkoutService.getRemoveFromCart().subscribe((cartItem: CartItem) => {
      this.checkoutService.CartItems = this.checkoutService.CartItems.filter(
        (p) => p.productId != cartItem.productId
      );
      this.cartItems = this.checkoutService.CartItems;
      this.setCheckOutItems();
    });

    this.setCheckOutItems();
  }

  setCheckOutItems() {
    this.cartTotal = 0;
    this.cartItems = this.checkoutService.CartItems;
    this.cartItems.forEach((p) => {
      this.cartTotal += p.quantity * p.price;
    });
    this.checkoutService
      .getDeliveryFee(this.cartTotal)
      .subscribe((deliveryFee) => {
        this.deliveryFee = deliveryFee;
        this.cartTotal += this.deliveryFee;
      });
  }

  onPlaceOrder(){
    this.checkoutService.placeOrder(this.cartItems).subscribe((response) => {
      this.checkoutService.CartItems = [];
      this.router.navigate(['/thank-you']);
    });
  }
}
