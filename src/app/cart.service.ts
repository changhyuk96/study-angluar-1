import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }


  addToCart(product: Product){
    product.cartCount+=1;

    if(product.cartCount===1)
      this.items.push(product);
  }

  removeToCart(product: Product){
    product.cartCount-=1;

    if(product.cartCount ==0){

      const index = this.items.findIndex(p => p.id === product.id);
      this.items.splice(index, 1);

    }
  }


  clearCart() {
      this.items = [];
      return this.items;
  }

  getItems(){
    return this.items;
  }


  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]> ('/assets/shipping.json');
  }
}
