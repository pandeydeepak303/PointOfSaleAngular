import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POSDashboardComponent } from './posdashboard/posdashboard.component';
import { ProductComponent } from './admin/product/product.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { PurchaseComponent } from './admin/purchase/purchase.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'POSDashboard', loadChildren: () => import('./posdashboard/posdashboard.module').then(m => m.POSDashboardModule) },
  { path: 'product', component: ProductComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'purchase', component: PurchaseComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
