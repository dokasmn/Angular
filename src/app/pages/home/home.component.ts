import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { FilterComponent } from "../../componentes/filter/filter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FilterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
