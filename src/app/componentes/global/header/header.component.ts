import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkBackground: boolean = false;
  router = inject(Router);

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/' || currentRoute === '/login') {
      this.isDarkBackground = true;
    } else {
      this.isDarkBackground = false;
    }
  }

}
