import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { CartItem } from '../../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public CartItems: CartItem[] = [];
  subject = new Subject();
  constructor() { }

  // sendCheckoutCart(cartItems: string){
  //   this.subject.next(cartItems);
  // }

  // getCheckoutCart(){
  //   return this.subject.asObservable();
  // }

  sendRemoveFromCart(product){
    this.subject.next(product);
  }

  getRemoveFromCart(){
    return this.subject.asObservable();
  }
}
