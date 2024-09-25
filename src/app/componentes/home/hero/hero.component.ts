import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent implements OnInit {
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.handleParallax);
  }


  handleParallax = () => {
    const scrollPosition = window.scrollY;
    const parallaxVideo = document.querySelector('.parallax-video') as HTMLElement;
    if (parallaxVideo) {
      parallaxVideo.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  };
}

