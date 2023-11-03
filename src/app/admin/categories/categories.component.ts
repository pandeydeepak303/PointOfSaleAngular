// import { Component } from '@angular/core';
// import { CategoriesService } from '../categories.service';
// import { ToastrService } from 'ngx-toastr';
// @Component({
//   selector: 'app-categories',
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.css']
// })
// export class CategoriesComponent {

//   TbData :any;
//    Data = {
//     productName: '',  
//     parentId: 0
//   };
//   toastr: any;
//   constructor(private categoresService: CategoriesService,private tosterService :ToastrService) {}
//   ngOnInit() {
//     debugger;
//     this.getCategories();
//   }
//   submitcategories() {
//     this.categoresService.postCategories(this.Data).subscribe(() => {
//       this.Data.productName = '';
//       this.Data.parentId = 0
//       this.getCategories();
//       debugger;
//    });
//   }
//     getCategories() {
//       this.categoresService.getAllCategories().subscribe(
//         (result: any) => {
//           debugger;
//           console.log( "DeepakData",result )
//           if (result.statusCode === 200) {
//             this.TbData = result.data;
//             console.log("Deepak", this.TbData);
//           } else {
//             console.error("Failed to fetch Categories. Status code:", result.statusCode);    
//           }
//           },
//         (error: any) => {
//           console.error("An error occurred:", error);
//         }
//       );
//     }
 
// }

import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  TbData: any;
 
  Data = {
    productName: '',
    parentId: 0
  };
  
  constructor(
    private categoriesService: CategoriesService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  submitcategories() {
    this.categoriesService.postCategories(this.Data).subscribe(
      () => {
        this.Data.productName = '';
        this.Data.parentId = 0;
        this.getCategories();
        this.toastrService.success('Category submitted successfully', 'Success');
      },
      (error: any) => {
        console.error('Error submitting category:', error);
        this.toastrService.error('Failed to submit category', 'Error');
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
}
