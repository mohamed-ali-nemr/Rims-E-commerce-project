import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formregister: FormGroup;
  msg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.formregister = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      type: ['client'] // Default to 'client'
    });
  }

  get f() {
    return this.formregister.controls;
  }

  register() {
    if (this.formregister.invalid) {
      return;
    }

    this.api.insert_user(this.formregister.value).subscribe({
      next: (result: any) => {
        if (result.message === 'Registration Successfully') {
          console.log(result.user);
          this.msg = 'Registration successful';
          localStorage.setItem('user_data_login', JSON.stringify(result.user));
          this.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
        } else {
          this.msg = 'Registration failed';
          console.log(this.msg);
        }
      },
      error: (err: any) => {
        console.error(err);
        this.msg = 'Registration failed';
      }
    });
  }
}