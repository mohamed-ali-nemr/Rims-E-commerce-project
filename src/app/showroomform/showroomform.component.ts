import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showroomform',
  templateUrl: './showroomform.component.html',
  styleUrls: ['./showroomform.component.css']
})
export class ShowroomformComponent implements OnInit {
  formShowroom: FormGroup;
  message2 = '';
  message = '';
  showroom: any = {};
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.formShowroom = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.formShowroom.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.api.get_showroom_by_id(this.id).subscribe({
        next: (data: any) => {
          if (data.showroom) {
            this.showroom = data.showroom;
            this.formShowroom.patchValue({
              id: this.showroom.id,
              name: this.showroom.name,
              address: this.showroom.address,
              contact_number: this.showroom.contact_number,
              email: this.showroom.email
            });
          }
        },
        error: (err: any) => {
          this.message2 = 'Error fetching showroom data';
          console.error(err);
        }
      });
    }
  }

  onSubmit() {
    const showroomData = this.formShowroom.value;

    if (this.id) {
      this.api.update_showroom(this.id, showroomData).subscribe({
        next: (data: any) => {
          if (data.status) {
            this.message = 'Showroom updated successfully';
          }
       
    }});
    } else {
      this.api.insert_showroom(showroomData).subscribe({
        next: (data: any) => {
          if (data.status) {
            this.message = 'Showroom created successfully';
          }
        }
      });
    }
  }
}