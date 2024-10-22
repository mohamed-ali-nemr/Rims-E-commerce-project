import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formlogin: FormGroup;
  msg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.formlogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.formlogin.controls;
  }

  login() {
    if (this.formlogin.invalid) {
      return;
    }

    this.api.login_user(this.formlogin.value).subscribe({
      next: (result: any) => {
        if (result.message === 'Email is required') {
          this.msg = 'Email not found';
        } else if (result.message === 'Invalid password') {
          this.msg = 'Invalid password';
        } else if (result.message === 'login Successfully') {
          this.msg = 'Login successful';
          localStorage.setItem('user_data_login', JSON.stringify(result.user));
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        } else {
          this.msg = 'Login went wrong';
        }
      },
      error: (err: any) => {
        console.error(err);
        this.msg = 'Login failed';
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}