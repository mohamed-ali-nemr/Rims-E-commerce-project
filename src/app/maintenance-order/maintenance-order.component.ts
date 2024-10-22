import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { EncodingServiceService } from '../services/encoding-service.service';

@Component({
  selector: 'app-maintenance-order',
  templateUrl: './maintenance-order.component.html',
  styleUrls: ['./maintenance-order.component.css'],
})
export class MaintenanceOrderComponent implements OnInit {
  formMaintenanceOrder: FormGroup;
  msg: string = '';
  category: any = [];
  store: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: Router,
    private encodingService: EncodingServiceService
  ) {
    const userId = JSON.parse(
      localStorage.getItem('user_data_login') || '{}'
    ).id;
    this.formMaintenanceOrder = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      car: ['', Validators.required],
      subject: ['', Validators.required],
      maintenance_center: ['', Validators.required],
      appointment: ['', Validators.required],
      user_id: [userId, Validators.required],
    });
  }

  ngOnInit(): void {
    this.api.get_categories().subscribe({
      next: (data: any) => {
        console.log(data);
        this.category = data['data'].map((item: any) => {
          return {
            ...item,
            encodedId: this.encodingService.encode(item.id.toString()),
          };
        });
      },
      error: (err: any) => {
        console.error(err);
      },
    });

    this.api.get_showrooms().subscribe({
      next: (data3: any) => {
        console.log(data3);

        this.store = data3['data'].map((item: any) => {
          return {
            ...item,
            encodedId: this.encodingService.encode(item.id.toString()),
          };
        });
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  get f() {
    return this.formMaintenanceOrder.controls;
  }

  submit() {
    if (this.formMaintenanceOrder.invalid) {
      return;
    }

    this.api
      .insert_maintenance_order(this.formMaintenanceOrder.value)
      .subscribe({
        next: (result: any) => {
          if (result.message) {
            this.msg = 'Maintenance order request successfully';
            console.log(result.maintenancee);
            // Navigate or perform other actions after successful submission
          } else {
            this.msg = 'Something went wrong. Please try again.';
          }
        },
        error: (err: any) => {
          console.error(err);
          this.msg = 'Failed to submit the maintenance order request.';
        },
      });
  }

  isloginnav() {
    // console.log(this.route.url)
    return this.route.url == '/login' || this.route.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
