import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/global/header/header.component";
import { CommonModule } from '@angular/common';
import { ProductResponse } from '../../interfaces/product-response';
import { ProductService } from '../../services/product/product.service';
import { CarouselComponent } from "../../componentes/global/carousel/carousel.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CarouselComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  products: ProductResponse[] = [];
  visibleProducts: ProductResponse[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsInCart();
  }

  loadProductsInCart(): void {
    this.products = this.productService.getCartProducts()
    console.log(this.products)
  }
}
