import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Subject } from 'rxjs'
import { CartItem } from '../../models/cart-item';
import { deliveryFeeUrl } from '../../config/apiUrl'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public CartItems: CartItem[] = [];
  subject = new Subject();
  constructor(private http: HttpClient) { }

  // sendCheckoutCart(cartItems: string){
  //   this.subject.next(cartItems);
  // }

  // getCheckoutCart(){
  //   return this.subject.asObservable();
  // }

  getDeliveryFee(cartTotal: number): Observable<number>{
    let params = new HttpParams().set("cartTotal", cartTotal.toString());
    return this.http.get<number>(deliveryFeeUrl, { params: params });
  }

  sendRemoveFromCart(cartItem){
    this.subject.next(cartItem);
  }

  getRemoveFromCart(){
    return this.subject.asObservable();
  }
}
