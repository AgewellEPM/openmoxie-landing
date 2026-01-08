import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { FeaturesOverviewComponent } from './components/features-overview/features-overview';
import { DownloadSectionComponent } from './components/download-section/download-section';
import { CommunityGalleryComponent } from './components/community-gallery/community-gallery';
import { AboutProjectComponent } from './components/about-project/about-project';
import { TechnicalArchitectureComponent } from './components/technical-architecture/technical-architecture';
import { ScrollAnimations } from './scroll-animations';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutProjectComponent,
    FeaturesOverviewComponent,
    TechnicalArchitectureComponent,
    DownloadSectionComponent,
    CommunityGalleryComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('modern-app');

  ngAfterViewInit() {
    // Initialize scroll animations after view is ready
    setTimeout(() => {
      ScrollAnimations.initialize();
    }, 100);
  }
}
