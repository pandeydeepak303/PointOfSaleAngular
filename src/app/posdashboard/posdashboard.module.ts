import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POSDashboardRoutingModule } from './posdashboard-routing.module';
import { POSDashboardComponent } from './posdashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebaarComponent } from './sidebaar/sidebaar.component';
@NgModule({
  declarations: [
    POSDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebaarComponent
  ],
  imports: [
    CommonModule,
    POSDashboardRoutingModule
  ]
})
export class POSDashboardModule { }
