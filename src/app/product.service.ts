import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  postProduct(data:any){
   return this.http.post("https://localhost:44374/api/Product/AddEditProduct",data)
  }

    public  getProducts():Observable<any> {
    return this.http.get("https://localhost:44374/api/Product/GetAllProduct?price=0");      
    }
    public deleteProductById(Id: number): Observable<any> {
      debugger;  

      const url = "https://localhost:44374/api/Product/DeleteProduct/"+Id;
      return this.http.delete(url);
    }

      public  getCategorirsDrop():Observable<any> {
      return this.http.get("https://localhost:44374/api/Product/GetAllCategories");      
      }


      sendImageToApi(base64Image: string) {
        const apiUrl = `https://localhost:44365/api/Product/AddEditProduct`; 
        const requestData = { image: base64Image };
        this.http.post(apiUrl, requestData).subscribe(
          (response) => {
           console.log('API Response:', response);
          },
          (error) => {    
            console.error('API Error:', error);
          }
        );
      

}

}
