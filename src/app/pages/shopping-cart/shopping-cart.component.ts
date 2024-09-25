import { Component, OnInit } from '@angular/core';
import { ProductResponse } from '../../interfaces/product-response';
import { ProductService } from '../../services/product/product.service';
import { HeaderComponent } from '../../componentes/global/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  imports: [HeaderComponent, CommonModule],
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: ProductResponse[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsInCart();
  }

  loadProductsInCart(): void {
    this.products = this.productService.getCartProducts();
    console.log(this.products)
  }

  removeFromCart(productId: number): void {
    if (productId) {
      this.productService.removeFromCart(productId);
      this.loadProductsInCart();
    }
  }
}
