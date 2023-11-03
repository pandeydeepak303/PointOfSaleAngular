import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  
  constructor(private http: HttpClient  ) { }
  public  getAllvander():Observable<any> {
    return this.http.get("https://localhost:44374/api/Account/GetAllVender");   
    }
}
