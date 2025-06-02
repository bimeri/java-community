import { Routes } from '@angular/router';
import {AdminComponent} from "./components/admin/admin.component";
import {authGuard, isAdminUser} from "./guards/auth.guard";

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../app/components/admin/admin-pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../app/components/admin/admin-pages/contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../app/components/admin/admin-pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../app/components/admin/admin-pages/settings/settings.component').then((m) => m.SettingsComponent),
        canActivate: [authGuard, isAdminUser],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
