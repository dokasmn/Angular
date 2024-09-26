import { Component, Input } from '@angular/core';
import { ProductResponse } from '../../../interfaces/product-response';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css'
})
export class FeaturedCarouselComponent {
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
    this.isTransitioning = true;
    setTimeout(() => {
      this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex + 3);
      this.isTransitioning = false;
    }, 300);
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
}
