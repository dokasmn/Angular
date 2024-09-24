import { Component, OnInit } from '@angular/core';
import { ProductResponse } from '../../../interfaces/product-response';
import { ProductService } from '../../../services/product/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  products: ProductResponse[] = [];
  visibleProducts: ProductResponse[] = [];
  currentIndex: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response: HttpResponse<ProductResponse[]>) => {
        this.products = response.body || [];
        this.updateVisibleProducts();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erro ao carregar produtos', error);
      }
    });
  }

  updateVisibleProducts(): void {
    this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex + 3);
  }

  moveLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleProducts();
    }
  }

  moveRight(): void {
    if (this.currentIndex < this.products.length - 3) {
      this.currentIndex++;
      this.updateVisibleProducts();
    }
  }

  addToCart(product: ProductResponse): void {
    this.productService.addToCart(product)
  }
  
}
