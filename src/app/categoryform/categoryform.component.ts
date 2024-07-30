import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-categoryform',
  templateUrl: './categoryform.component.html',
  styleUrls: ['./categoryform.component.css']
})
export class CategoryformComponent implements OnInit {
  formpcategory: FormGroup;
  message2 = '';
  message = '';
  category: any = [];
  id: any;
  fileToUpload: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute, 
    private sanitizer: DomSanitizer
  ) {
    this.formpcategory = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      pd_name: ['', Validators.required],
      images: [null, Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      speed: ['', Validators.required],
      type: ['', Validators.required],
      // _method:['PUT'],
    });
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  get f() {
    return this.formpcategory.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.api.getCategoryById(this.id).subscribe({
        next: (data: any) => {
          if (data.category) {
            this.category = data.category;
            this.formpcategory.patchValue({
              id: this.category.id,
              name: this.category.name,
              pd_name: this.category.pd_name,
              description: this.category.description,
              price: this.category.price,
              speed: this.category.speed,
              type: this.category.type,
              images: this.category.images
            });
          }
        }
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.formpcategory.value.id);
    formData.append('name', this.formpcategory.value.name);
    formData.append('pd_name', this.formpcategory.value.pd_name);
    formData.append('description', this.formpcategory.value.description);
    formData.append('price', this.formpcategory.value.price);
    formData.append('speed', this.formpcategory.value.speed);
    formData.append('type', this.formpcategory.value.type);
    // formData.append('_method', 'PUT');
    if (this.fileToUpload !== null) {
      formData.append('images', this.fileToUpload, this.fileToUpload.name);
    }

    if (this.id) {
      formData.append('_method', 'PUT');
      this.api.update_category(this.id, formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Category updated successfully';
          }
        },
        error: (error) => {
          this.message2 = 'Error updating category';
          console.error(error);
        }
      });
    } else {
      this.api.insert_category(formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Category added successfully';
          }
        },
        error: (error) => {
          this.message2 = 'Error adding category';
          console.error(error);
        }
      });
    }
  }
}