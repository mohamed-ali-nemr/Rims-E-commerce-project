import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  formUser: FormGroup;
  message2 = '';
  msg = '';
  user: any = {};
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.formUser = this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type:[''],
    
    });
  }

  get f() {
    return this.formUser.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.api.get_user_by_id(this.id).subscribe({
        next: (data: any) => {
          if (data.user) {
            this.user = data.user;
            console.log(this.user);
            
            this.formUser.patchValue({
              id: this.user.id,
              name: this.user.name,
              email: this.user.email,
              type: this.user.type,
             
            });
          }
        }
      });
    }
  }
  onSubmit() {
    const userData = this.formUser.value;

    if (this.id) {
      this.api.update_user(this.id, userData).subscribe({
        next: (data: any) => {
          if (data.message) {
            this.msg = 'User updated successfully';
          }
        },
        error: (err: any) => {
          this.message2 = 'Error updating user';
          console.error(err);
        }
      });
    } else {
      this.api.insert_user(userData).subscribe({
        next: (data: any) => {
          if (data.message) {
            this.msg = 'User created successfully';
          }
        },
        error: (err: any) => {
          this.message2 = 'Error creating user';
          console.error(err);
        }
      });
    }
  }
}