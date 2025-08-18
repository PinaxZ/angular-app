import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { BlankComponent } from './pages/blank/blank';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: BlankComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];