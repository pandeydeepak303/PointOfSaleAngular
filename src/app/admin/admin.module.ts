import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { VenderComponent } from './vender/vender.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebaarComponent } from './sidebaar/sidebaar.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    ProductComponent,
    VenderComponent,
    PurchaseComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebaarComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
    }) 
  ]
})

export class AdminModule { }
