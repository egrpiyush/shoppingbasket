import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject();
  constructor() { }

  sendAddToCart(product){
    this.subject.next(product);
  }

  getAddToCart(){
    return this.subject.asObservable();
  }
}
