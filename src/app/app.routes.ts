import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cabecalho',
    loadComponent: () => import('./cabecalho/cabecalho.page').then( m => m.CabecalhoPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.page').then( m => m.SobrePage)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/servicos/servicos.page').then( m => m.ServicosPage)
  },
  {
    path: 'rodape',
    loadComponent: () => import('./rodape/rodape.page').then( m => m.RodapePage)
  },
  {
    path: 'tela-login',
    loadComponent: () => import('./login/tela-login/tela-login.page').then( m => m.TelaLoginPage)
  },
  {
    path: 'cadastrar',
    loadComponent: () => import('./login/cadastrar/cadastrar.page').then( m => m.CadastrarPage)
  },
];
