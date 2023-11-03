import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {
  constructor( private PurchaseService : PurchaseService) {} 
  TbData: any[]= [];
  public vendor:number=0;
    onVendorChange() {
      console.log('Selected vendor:', this.vendor); 
    }
  formData = {
    id: 0,
    parentId: 0,
    productName: '',
    price: '',   
    Image: '',
    Quantity: '',
    isReturnable: false 
  }; 

  ngOnInit(): void {
    this.PurchaseService.getAllvander().subscribe(
      ( Response: any) => {
        debugger;
        console.log(this.vendor);
        this.TbData = Response.data;  
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
