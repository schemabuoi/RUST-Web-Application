import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/shared/models/productCart';
import { CartService } from 'src/app/shared/services/cart-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  isOrderConfirmationVisible : boolean;
  productCarts: ProductCart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productCarts = this.cartService.getProductCarts();
  }

  setOrderConfirmationVisibility(){
    if (this.isOrderConfirmationVisible){
      this.isOrderConfirmationVisible = false;
    }
    else{
      event.stopPropagation();
      this.isOrderConfirmationVisible = true;
    }
  }

  getSubtotal(){
    let subtotal: number = 0;
    for (var i = 0; i < this.productCarts.length; i++) {
      if (this.productCarts[i] == this.productCarts[0]){
        subtotal += this.productCarts[i].price;
      }
      else{
        subtotal += this.productCarts[i].price + 0.01;
      }
    }
    return subtotal.toFixed(2);
  }

}