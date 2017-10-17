import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { ActivateGuard } from '../theme/security/activate.guard';
import {NoLoggedGuard} from '../theme/security/no-logged.guard';
import {AdminGuard} from "../theme/security/admin.guard";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
    // canActivate: [NoLoggedGuard]
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',
      },
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
      { path: 'products', loadChildren: './product/products.module#ProductsModule' },
      { path: 'promotion', loadChildren: './promotion/promotion.module#PromotionModule' },
    ],
    canActivate: [AdminGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
