import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/global/header/header.component";
import { FilterComponent } from "../../componentes/home/filter/filter.component";
import { CarouselComponent } from "../../componentes/global/carousel/carousel.component";
import { FooterComponent } from "../../componentes/global/footer/footer.component";
import { HeroComponent } from '../../componentes/home/hero/hero.component';
import { CategoryCarouselComponent } from "../../componentes/home/category-carousel/category-carousel.component";
import { ProductService } from '../../services/product/product.service';
import { ProductResponse } from '../../interfaces/product-response';
import { HeaderService } from '../../services/header-service/header-service.service';
import { FeaturedCarouselComponent } from '../../componentes/home/featured-carousel/featured-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FilterComponent, CarouselComponent, FooterComponent, HeroComponent, CategoryCarouselComponent, FeaturedCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: ProductResponse[] = [];
  featuredProducts: ProductResponse[] = [];

  constructor(private productService: ProductService, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadFeaturedProducts();
    this.updateHeaderColor(window.scrollY);
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.body || [];
      },
      error: (error) => {
        console.error('Erro ao carregar produtos', error);
      }
    });
  }

  loadFeaturedProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        const allProducts = response.body || [];
        this.featuredProducts = allProducts.filter(product => product.isFeatured);
        console.log(this.featuredProducts);
      },
      error: (error) => {
        console.error('Erro ao carregar produtos em destaque', error);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.updateHeaderColor(window.scrollY);
  }

  updateHeaderColor(scrollY: number): void {
    const heroHeight = document.querySelector('app-hero')?.clientHeight || 0;
    const section1Height = document.querySelector('.bg-zinc-100')?.clientHeight || 0;

    if (scrollY < heroHeight) {
      this.headerService.setHeaderColor('text-zinc-500'); // Cor para o cabeçalho no hero
    } else if (scrollY < heroHeight + section1Height) {
      this.headerService.setHeaderColor('text-white'); // Cor para a primeira seção
    } else {
      this.headerService.setHeaderColor('text-zinc-500'); // Cor padrão para as demais seções
    }
  }
}