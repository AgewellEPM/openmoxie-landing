import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boot-guide',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './boot-guide.html',
  styleUrl: './boot-guide.css',
  standalone: true
})
export class BootGuideComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    // SEO Meta Tags for Boot Guide Page
    this.title.setTitle('How to Boot Up Your Moxie Robot | Troubleshooting Guide | OpenMoxie');

    this.meta.updateTag({
      name: 'description',
      content: 'Complete guide to booting up your Moxie robot. Learn about chest light indicators, QR codes, troubleshooting common boot issues, and getting your Moxie ready for OpenMoxie setup.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Moxie robot boot, Moxie startup guide, Moxie troubleshooting, Moxie QR code, Moxie chest light, Moxie won\'t turn on, Moxie battery issues, Moxie boot loop'
    });

    this.meta.updateTag({ property: 'og:title', content: 'How to Boot Up Your Moxie Robot - Complete Guide' });
    this.meta.updateTag({ property: 'og:description', content: 'Complete guide to booting up your Moxie robot with troubleshooting tips for common startup issues.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://openmoxie.org/boot-guide' });

    this.meta.updateTag({ name: 'twitter:title', content: 'How to Boot Up Your Moxie Robot - Complete Guide' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Complete guide to booting up your Moxie robot with troubleshooting tips for common startup issues.' });
  }

  chestLightIndicators = [
    {
      color: 'Pulsing Purple',
      meaning: 'Listening / Waking Up',
      status: 'normal',
      action: 'Moxie is responding to wake word or button press'
    },
    {
      color: 'Solid Blue',
      meaning: 'Stuck in Boot',
      status: 'warning',
      action: 'Try power cycling - may need full reboot'
    },
    {
      color: 'Dream Bubbles',
      meaning: 'Sleeping Mode',
      status: 'normal',
      action: 'Say "Hey Moxie" or press button to wake'
    },
    {
      color: 'QR Code on Screen',
      meaning: 'Ready to Connect',
      status: 'success',
      action: 'Moxie is ready for OpenMoxie setup'
    },
    {
      color: 'No Light Changes',
      meaning: 'Power/Battery Issue',
      status: 'error',
      action: 'Check power connection and try different charger'
    }
  ];

  commonIssues = [
    {
      symptom: 'No QR code appearing',
      causes: ['Battery too low', 'Hasn\'t reached ready state', 'Boot loop'],
      solution: 'Charge for 30-60 minutes while plugged in, then try power cycle'
    },
    {
      symptom: 'Stuck on blue chest light',
      causes: ['Boot process stalled', 'Firmware issue'],
      solution: 'Hold power button for 10+ seconds to force shutdown, then restart'
    },
    {
      symptom: 'Powers on then immediately off',
      causes: ['Battery degradation', 'Insufficient power supply'],
      solution: 'Try different outlet/charger, keep plugged in during use'
    },
    {
      symptom: 'Shows dream bubbles only',
      causes: ['Moxie is sleeping normally'],
      solution: 'Say "Hey Moxie" or press chest button to wake'
    }
  ];
}
