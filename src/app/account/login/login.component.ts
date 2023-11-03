
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: any;
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    const utype = localStorage.getItem("userType");

    if (utype ==="Admin") {
      this.router.navigate(['/Admin']);
    }
  }

  submitted = false;
  formModel: FormModel = new FormModel();

  saveNameForm(formModel: any) {
    this.submitted = true;
    this.authService.UserLogin(formModel).subscribe((result: any) => {
      console.log(result, 'result');
      if (result.status === 200) {
        if (result.userType === 'Admin') {
          localStorage.setItem('userType', 'Admin');
          this.router.navigate(['/Admin']);
          this.toastr.success('Login successful!', 'Success');
        }
      } else if (result.status === 401) {
        this.toastr.error('Invalid User', 'Error');
      }
    });
  }
}

export class FormModel {
  userName!: string;
  password: string | undefined;
}
