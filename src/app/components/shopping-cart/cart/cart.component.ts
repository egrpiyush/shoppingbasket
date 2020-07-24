import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service'
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productId:1, productName: "asa", quantity: 1, price: 10},
    // {id: 2, productId:2, productName: "asa", quantity: 2, price: 10},
    // {id: 3, productId:3, productName: "asa", quantity: 1, price: 10},
    // {id: 4, productId:4, productName: "asa", quantity: 3, price: 10},
  ];

  cartTotal = 0;

  constructor(private message: CartService) { }

  ngOnInit() {
    this.message.getAddToCart().subscribe((product: Product) => {
      this.addToCart(product);
    });
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
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price
      });      
    }

    // if (this.cartItems.length === 0){
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     quantity: 1,
    //     price: product.price
    //   });
    // }
    // else{
    //   for (let i in this.cartItems){
    //     if(this.cartItems[i].productId === product.id){
    //       this.cartItems[i].quantity++; 
    //       break;
    //     }
    //     else{
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         quantity: 1,
    //         price: product.price
    //       });
    //     }
    //   }
    // }

    this.cartItems.forEach(p => {
      this.cartTotal += (p.quantity * p.price);
    })
  }

}
