import { Component } from '@angular/core';
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
export class HomeComponent {

  constructor(private productService: ProductService) {}

  products:ProductResponse[] = []

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response: HttpResponse<ProductResponse[]>) => {
        this.products = response.body || [];
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erro ao carregar produtos', error);
      }
    });
  }
}
