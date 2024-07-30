import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  formproduct: FormGroup;
  message2 = '';
  message = '';
  product: any = {};
  category: any = [];
  showroom: any = [];
  id: any;
  fileToUpload: File | null = null;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.formproduct = this.formBuilder.group({
      id: [''],
      id_category: ['', Validators.required],
      id_showroom: ['', Validators.required],
      name: ['', Validators.required],
      images: [null, Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      speed: ['', Validators.required],
      type: ['', Validators.required],
      cylinder: ['', Validators.required],
      color: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      offer: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  get f() {
    return this.formproduct.controls;
  }

  ngOnInit(): void {
    // To get the names of categories in the form
    this.api.get_categories().subscribe({
      next: (data: any) => {
        this.category = data['data'];
      }
    });

    // To get the names of showrooms in the form
    this.api.get_showrooms().subscribe({
      next: (data: any) => {
        this.showroom = data['data'];
      }
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.api.getProductById(this.id).subscribe({
        next: (data: any) => {
          if (data.product) {
            this.product = data.product;
            this.formproduct.patchValue({
              id: this.product.id,
              id_category: this.product.id_category,
              id_showroom: this.product.id_showroom,
              name: this.product.name,
              description: this.product.description,
              price: this.product.price,
              speed: this.product.speed,
              type: this.product.type,
              cylinder: this.product.cylinder,
              color: this.product.color,
              brand: this.product.brand,
              model: this.product.model,
              offer: this.product.offer,
              stock: this.product.stock
            });
          }
        }
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.formproduct.value.id);
    formData.append('id_category', this.formproduct.value.id_category);
    formData.append('id_showroom', this.formproduct.value.id_showroom);
    formData.append('name', this.formproduct.value.name);
    formData.append('description', this.formproduct.value.description);
    formData.append('price', this.formproduct.value.price);
    formData.append('speed', this.formproduct.value.speed);
    formData.append('type', this.formproduct.value.type);
    formData.append('cylinder', this.formproduct.value.cylinder);
    formData.append('color', this.formproduct.value.color);
    formData.append('brand', this.formproduct.value.brand);
    formData.append('model', this.formproduct.value.model);
    formData.append('offer', this.formproduct.value.offer);
    formData.append('stock', this.formproduct.value.stock);
    
    if (this.fileToUpload !== null) {
      formData.append('images', this.fileToUpload);
    }

    if (this.id) {
      formData.append('_method', 'PUT');
      this.api.update_product(this.id, formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Product updated successfully';
          }
        },
        error: (error) => {
          this.message2 = 'Error updating product';
          console.error(error);
        }
      });
    } else {
      this.api.insert_product(formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Product created successfully';
          }
        },
        error: (error) => {
          this.message2 = 'Error creating product';
          console.error(error);
        }
      });
    }
  }
}