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
  showSuccessPopup: boolean = false;
  isTransitioning: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateVisibleProducts();
  }

  ngOnChanges(): void {
    this.updateVisibleProducts();
  }

  updateVisibleProducts(): void {
    // Adiciona um pequeno delay para simular a transição entre os produtos
    this.isTransitioning = true;
    setTimeout(() => {
      this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex + 3);
      this.visibleProducts = this.visibleProducts.map(product => ({
        ...product,
        description: this.truncateDescription(product.description, 80)
      }));
      this.isTransitioning = false;
    }, 300); // A duração da transição deve ser sincronizada com a do Tailwind
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
    this.productService.addToCart(product);
    this.showSuccessPopup = true;
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }

  truncateDescription(description: string, maxLength: number): string {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  }
}
