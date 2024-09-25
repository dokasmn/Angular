import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent {
  categories = [
    { name: 'Makeup', image: 'imagens/makeup.png' },
    { name: 'Perfumes', image: 'imagens/perfumes.png' },
    { name: 'Rooms', image: 'imagens/rooms.jpg' },
    { name: 'Food', image: 'imagens/food.png' },
    { name: 'Ingredients', image: 'imagens/ingredients.png' },
    { name: 'For pets', image: 'imagens/for-pets.png' },
  ];

  moveLeft(): void {
    const container = document.querySelector('.overflow-x-auto')!;
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }
  
  moveRight(): void {
    const container = document.querySelector('.overflow-x-auto')!;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }
  
  
}
