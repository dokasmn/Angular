import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent {
  

  products = [
    { title: 'Produto 1', description: 'Descrição 1', price: 100 },
    { title: 'Produto 2', description: 'Descrição 2', price: 200 },
    { title: 'Produto 3', description: 'Descrição 3', price: 300 },
    { title: 'Produto 4', description: 'Descrição 4', price: 400 },
    { title: 'Produto 5', description: 'Descrição 5', price: 500 },
  ];
  visibleCount = 3;
  currentIndex = 0;

  get visibleProducts() {
    return this.products.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }


  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


  moveRight() {
    if (this.currentIndex + this.visibleCount < this.products.length) {
      this.currentIndex++;
    }
  }
}
