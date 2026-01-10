import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'boot-guide',
    loadComponent: () => import('./pages/boot-guide/boot-guide').then(m => m.BootGuideComponent)
  }
];
