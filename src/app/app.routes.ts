import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Landingpage } from './landingpage/landingpage';
import { Index } from './index/index';

import { Dashboard } from './dashboard/dashboard';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'index', component: Index },
  { path: 'dashboard', component: Dashboard },
  { path: 'game', component: Landingpage },
  {
    path: 'tambola',
    loadComponent: () => import('./tambola/tambola.component').then(m => m.TambolaComponent)
  },
];
