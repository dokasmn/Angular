import { Component } from '@angular/core';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent {
  categories = [
    { name: 'Tênis', image: 'assets/tenis.png' },
    { name: 'Chuteiras', image: 'assets/chuteira.png' },
    { name: 'Camisas de Time', image: 'assets/camisa-time.png' },
    { name: 'Suplementos', image: 'assets/suplementos.png' },
    { name: 'Camisetas', image: 'assets/camiseta.png' },
    { name: 'Jaquetas e Casacos', image: 'assets/jaqueta.png' },
    { name: 'Mochilas', image: 'assets/mochila.png' },
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
