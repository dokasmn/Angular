import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/global/header/header.component";
import { CommonModule } from '@angular/common';
import { ProductResponse } from '../../interfaces/product-response';
import { ProductService } from '../../services/product/product.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
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
    this.productService.getCartProducts().subscribe({
      next: (response: HttpResponse<ProductResponse[]>) => {
        this.products = response.body || [];
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erro ao carregar produtos', error);
      }
    });
  }
}
