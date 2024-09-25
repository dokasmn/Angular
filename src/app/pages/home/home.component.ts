import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/global/header/header.component";
import { FilterComponent } from "../../componentes/home/filter/filter.component";
import { CarouselComponent } from "../../componentes/global/carousel/carousel.component";
import { FooterComponent } from "../../componentes/global/footer/footer.component";
import { HeroComponent } from '../../componentes/home/hero/hero.component';
import { CategoryCarouselComponent } from "../../componentes/home/category-carousel/category-carousel.component";
import { ProductService } from '../../services/product/product.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ProductResponse } from '../../interfaces/product-response';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FilterComponent, CarouselComponent, FooterComponent, HeroComponent, CategoryCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: ProductResponse[] = [];
  featuredProducts: ProductResponse[] = []; // Produtos em destaque

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadFeaturedProducts(); // Carrega produtos em destaque
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
    // Aqui você pode modificar para pegar apenas os produtos que deseja destacar
    this.productService.getProducts().subscribe({
      next: (response) => {
        const allProducts = response.body || [];
        this.featuredProducts = allProducts.filter(product => product.isFeatured); // Supondo que você tenha um campo isFeatured
      },
      error: (error) => {
        console.error('Erro ao carregar produtos em destaque', error);
      }
    });
  }
}
