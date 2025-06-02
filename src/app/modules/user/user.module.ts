import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "../../components/dashboard/dashboard.component";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class UserModule { }
