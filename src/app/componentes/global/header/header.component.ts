import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../../services/header-service/header-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerColor: string = 'text-zinc-500';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.headerColor$.subscribe(color => {
      this.headerColor = color;
    });
  }
}
