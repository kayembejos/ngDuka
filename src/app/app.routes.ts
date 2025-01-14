import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'ngDuka',
    loadComponent: () => import('./ui/home/home.component'),
  },
  {
    path: 'products/:category',
    loadComponent: () => import('./ui/products/products.component'),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./ui/products/products.component'),
  },
];
