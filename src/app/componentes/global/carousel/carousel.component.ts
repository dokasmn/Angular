import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../../../interfaces/product-response';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() products: ProductResponse[] = [];
  visibleProducts: ProductResponse[] = [];
  currentIndex: number = 0;

  // Variável para controle do popup de sucesso
  showSuccessPopup: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateVisibleProducts();
  }

  ngOnChanges(): void {
    this.updateVisibleProducts();
  }

  updateVisibleProducts(): void {
    this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex + 3);
    this.visibleProducts = this.visibleProducts.map(product => ({
      ...product,
      description: this.truncateDescription(product.description, 80)
    }));
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
    this.showSuccessPopup = true;
  }


  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }


  truncateDescription(description: string, maxLength: number): string {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  }
}