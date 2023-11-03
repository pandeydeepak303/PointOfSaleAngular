
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  apiUrl = 'https://localhost:44374/api/Account';
  constructor(private http: HttpClient) {}
  UserLogin(data: any): Observable<any> {
    console.log('data', data);
     return this.http.post(this.apiUrl + '/UserLogin', data)
     
  }
}
