import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true
})
export class AboutComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    // SEO Meta Tags for About Page
    this.title.setTitle('About SimpleMoxieSwitcher | Moxie Robot Control Software | OpenMoxie');

    this.meta.updateTag({
      name: 'description',
      content: 'Learn about SimpleMoxieSwitcher - the free Moxie robot control software. Features AI conversations, educational games, parental controls for Embodied Moxie robots. Available for Mac, Windows & iOS.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Moxie Robot software, Open Moxie about, Moxie AI features, SimpleMoxieSwitcher features, Moxie robot app, Embodied Moxie control, Moxie educational games, Moxie parental controls, free Moxie software'
    });

    this.meta.updateTag({ property: 'og:title', content: 'About SimpleMoxieSwitcher - Moxie Robot Control Software' });
    this.meta.updateTag({ property: 'og:description', content: 'Learn about SimpleMoxieSwitcher - the free Moxie robot control software with AI conversations, educational games, and parental controls.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://openmoxie.org/about' });

    this.meta.updateTag({ name: 'twitter:title', content: 'About SimpleMoxieSwitcher - Moxie Robot Control Software' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Learn about SimpleMoxieSwitcher - the free Moxie robot control software with AI conversations, educational games, and parental controls.' });
  }
  features = [
    {
      icon: '🤖',
      title: 'AI Conversations',
      description: 'Multiple personalities powered by OpenAI, Anthropic, or local models'
    },
    {
      icon: '📚',
      title: 'Educational Games',
      description: 'Trivia, spelling, movie quotes, video games, and more'
    },
    {
      icon: '🌍',
      title: 'Language Learning',
      description: 'Support for 8+ languages with native pronunciation'
    },
    {
      icon: '📖',
      title: 'Interactive Stories',
      description: 'Choose-your-own-adventure storytelling system'
    },
    {
      icon: '🏠',
      title: 'Smart Home',
      description: 'Control Alexa and Google Home devices'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Parental Controls',
      description: 'PIN protection, usage limits, content filtering'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Track usage, costs, and learning progress'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'All data stays on your computer, never sent to cloud'
    }
  ];

  platforms = [
    {
      name: 'macOS',
      description: 'Native Swift application for macOS 13.0 or later',
      downloadUrl: 'https://github.com/AgewellEPM/SimpleMoxieSwitcher/releases/latest/download/SimpleMoxieSwitcher-1.0.0.dmg',
      icon: '🍎'
    },
    {
      name: 'Windows',
      description: 'Native C# application for Windows 10 (19041+) or Windows 11',
      downloadUrl: 'https://github.com/AgewellEPM/SimpleMoxieSwitcher/releases/latest/download/SimpleMoxieSwitcher-Setup.exe',
      icon: '🪟'
    },
    {
      name: 'iOS Remote',
      description: 'Control Moxie from your iPhone or iPad',
      downloadUrl: 'https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE',
      icon: '📱'
    }
  ];
}
