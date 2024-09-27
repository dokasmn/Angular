import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  activeVideo: string = 'waves-reflection.mp4';

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

  changeVideo(videoSrc: string): void {
    const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
    videoElement.src = videoSrc;
    videoElement.play();
    this.activeVideo = videoSrc.split('/').pop() as string;
  }
}
