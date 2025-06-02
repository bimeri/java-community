import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PartnersComponent} from "./components/partners/partners.component";
import {BindingComponent} from "./components/bindging/binding.component";
import {SignalsComponent} from "./components/signals/signals.component";
import {ComponentCommunicationComponent} from "./components/component-communication/component-communication.component";
import {DirectivePipeComponent} from "./components/directive-pipes/directive-pipe.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'communication', component: ComponentCommunicationComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'directives-pipes', component: DirectivePipeComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'admin', loadChildren: () => import('./admin.routes').then(m => m.adminRoutes) },

  { path: '**', component: PageNotFoundComponent }
];
