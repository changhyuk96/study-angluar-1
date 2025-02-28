import { Component } from '@angular/core';
import { CartService } from '../cart.service'
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  product: Product | undefined;

  items= this.cartService.getItems();


  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder
  ){}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  removeToCart(product: Product){
    this.cartService.removeToCart(product);
  }

  onSubmit(): void {
    // 주문 로직은 여기에 구현합니다.
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
