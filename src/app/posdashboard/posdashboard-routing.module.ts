import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POSDashboardComponent } from './posdashboard.component';

const routes: Routes = [{ path: '', component: POSDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class POSDashboardRoutingModule { }
