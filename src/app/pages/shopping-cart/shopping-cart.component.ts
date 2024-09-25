import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ProductResponse } from '../../interfaces/product-response';
import { ProductService } from '../../services/product/product.service';
import { HeaderComponent } from '../../componentes/global/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../componentes/global/footer/footer.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  imports: [HeaderComponent, CommonModule, FooterComponent],
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: ProductResponse[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsInCart();
    this.calculateTotalPrice();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.products.reduce((acc, product) => acc + product.price, 0);
  }

  loadProductsInCart(): void {
    this.products = this.productService.getCartProducts();
    console.log(this.products)
  }

  removeFromCart(productId: number): void {
    if (productId) {
      this.productService.removeFromCart(productId);
      this.loadProductsInCart();
      this.calculateTotalPrice();
    }
  }
}
