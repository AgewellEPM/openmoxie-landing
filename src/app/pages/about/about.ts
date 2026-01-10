import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-about',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true
})
export class AboutComponent {
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
      downloadUrl: 'https://openmoxie.org/downloads/SimpleMoxieSwitcher-1.0.0.dmg',
      icon: '🍎'
    },
    {
      name: 'Windows',
      description: 'Native C# application for Windows 10 (19041+) or Windows 11',
      downloadUrl: 'https://openmoxie.org/downloads/SimpleMoxieSwitcher-Setup.exe',
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
