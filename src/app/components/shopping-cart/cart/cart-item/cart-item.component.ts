import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../../../../services/checkout/checkout.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
  }

  onRemoveFromCart(){
    this.checkoutService.sendRemoveFromCart(this.cartItem);
  }

}
