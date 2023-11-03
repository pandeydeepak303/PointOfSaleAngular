import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  [x: string]: any;
  constructor(private http: HttpClient, private tosterService :ToastrService) { }
  postCategories(data:any){
    return this.http.post("https://localhost:44374/api/Product/AddCategorie",data)
   } 
   
   public  getAllCategories():Observable<any> {  
    return this.http.get("https://localhost:44374/api/Product/GetAllCategories");
    }
}


