import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css'],
})
export class ProdDetailComponent implements OnInit {
  product: any[] = [];
  topic: any = {};
  decodedId: number | undefined;
  id_product: any;
  review: any = [];
  formreview!: FormGroup;
  p: number = 1;
  category: any = [];
  store: any = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private encodingService: EncodingServiceService,
    private formBuilder: FormBuilder,
    private route1: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const encodedId = params.get('id');
      if (encodedId) {
        this.decodedId = parseInt(this.encodingService.decode(encodedId), 10);
        this.id_product = this.decodedId; // Assign decodedId to id_product

        if (this.id_product) {
          this.fetchProducts(this.id_product);
          this.fetchReview(this.id_product);
        }
      }
    });

    const userId = JSON.parse(
      localStorage.getItem('user_data_login') || '{}'
    ).id;

    this.formreview = this.formBuilder.group({
      product_id: [this.id_product, Validators.required],
      user_id: [userId, Validators.required],
      rating: [null, [Validators.min(1), Validators.max(5)]],
      comment: ['', [Validators.required, Validators.minLength(140)]],
    });

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

  fetchProducts(id_product: number): void {
    this.api.getProductById(id_product).subscribe({
      next: (data: any) => {
        console.log(data); // Log data to confirm structure

        // Ensure data.product is an object
        if (data && data.product) {
          const product = data.product;
          this.product = [
            // Wrap the single product object in an array
            {
              ...product,
              new_id: btoa(product.id.toString()),
            },
          ];

          // Set topic (if required)
          this.topic = product; // Assuming you need to use the same product for the topic
        } else {
          console.error('Product data is not in the expected format:', data);
          this.product = []; // Default to empty array if data is not as expected
        }
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  fetchReview(id_product: number): void {
    this.api.get_reviews_for_each_product(id_product).subscribe({
      next: (data: any) => {
        console.log(data);
        this.review = data['data'];
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  submit() {
    console.log(this.formreview.value);

    this.api.insert_review(this.formreview.value).subscribe({
      next: (data: any) => {
        console.log(data);
        // Optionally, you can refresh reviews after submission
        this.fetchReview(this.id_product);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  isloginnav() {
    // console.log(this.route.url)
    return this.route1.url == '/login' || this.route1.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
