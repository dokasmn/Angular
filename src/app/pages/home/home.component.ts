import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/global/header/header.component";
import { FilterComponent } from "../../componentes/home/filter/filter.component";
import { CarouselComponent } from "../../componentes/global/carousel/carousel.component";
import { FooterComponent } from "../../componentes/global/footer/footer.component";
import { HeroComponent } from '../../componentes/home/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FilterComponent, CarouselComponent, FooterComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
