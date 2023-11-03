import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/product.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  data: any;
  TbData: any;
  formData = {
    id :0,
    parentId: 0,
    productName: '',
    price: '',
    brand: '',
    productImage: '',
    isReturnable:false
  };
  
dataSource: any;
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
  submitForm() {
    this.onFileSelected
    this.productService.postProduct(this.formData).subscribe(
      (response: any) => {
        this.toastr.success('Product added successfully', 'Success'); 
        this.formData.parentId = 0;
        this.formData.productName = '';
        this.formData.price = '';
        this.formData.brand = '';
        this.formData.productImage = '';
        this.formData.isReturnable = false;
        this.getProducts();  
      },
      (error) => {
        this.toastr.error('An error occurred while adding the product', 'Error');
        console.error('Error:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    debugger;
    console.log(" Deepak")
    reader.onload = (e: any) => {       
      const base64Image = e.target.result;
      this.formData.productImage = base64Image; 
    };
    reader.readAsDataURL(file);
  }  


  getProducts() {
    this.productService.getProducts().subscribe(
      (result: any) => {
        debugger;
         console.log( "Deepak",result)
        if (result.statusCode === 200 ) {
          this.data = result.data;
        } else {
          console.error('Failed to fetch products. Status code:', result.statusCode);
        }
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }


  getCategories() {
    this.categoriesService.getAllCategories().subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.TbData = result.data;
        } else {
          console.error('Failed to fetch Categories. Status code:', result.statusCode);
        }
      },
      (error: any) => {
        console.error('An error occurred:', error);
      }
    );
  }


  editClick(index: number) { 
    debugger;
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });

    if (index >= 0 && index < this.data.length) {
      const selectedItem = this.data[index];
      this.formData.id = selectedItem.id;
      this.formData.productName = selectedItem.productName;
      this.formData.parentId = selectedItem.parentId;
      this.formData.price = selectedItem.price;
      this.formData.isReturnable = selectedItem.isReturnable;
      this.formData.productImage = selectedItem.productImage;
      this.formData.brand = selectedItem.brand;
    }
  }

  deleteProduct(product: any) {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
  
    if (confirmDelete) {
      this.productService.deleteProductById(product.id).subscribe(
        () => {     
          this.getProducts(); 
          console.log(product.id);
          console.log('Product deleted successfully.'); 
          this.toastr.warning('Product Deleted successfully', 'Success');  
        },
        (error) => { 
          console.error('Error deleting product:', error);
        }
      );
    }
  }
  




}




