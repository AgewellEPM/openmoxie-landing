import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { HeroComponent } from '../../components/hero/hero';
import { FeaturesOverviewComponent } from '../../components/features-overview/features-overview';
import { DownloadSectionComponent } from '../../components/download-section/download-section';
import { CommunityGalleryComponent } from '../../components/community-gallery/community-gallery';
import { AboutProjectComponent } from '../../components/about-project/about-project';
import { TechnicalArchitectureComponent } from '../../components/technical-architecture/technical-architecture';
import { ScrollAnimations } from '../../scroll-animations';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutProjectComponent,
    FeaturesOverviewComponent,
    TechnicalArchitectureComponent,
    DownloadSectionComponent,
    CommunityGalleryComponent
  ],
  templateUrl: './home.html',
  standalone: true
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      ScrollAnimations.initialize();
    }, 100);
  }
}
