import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  subject = new Subject();
  constructor() { }

  sendRemoveFromCart(product){
    this.subject.next(product);
  }

  getRemoveFromCart(){
    return this.subject.asObservable();
  }
}
