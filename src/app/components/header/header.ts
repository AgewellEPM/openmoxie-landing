import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class HeaderComponent {
  isDownloadMenuOpen = false;

  toggleDownloadMenu() {
    this.isDownloadMenuOpen = !this.isDownloadMenuOpen;
  }

  closeDownloadMenu() {
    this.isDownloadMenuOpen = false;
  }
}
