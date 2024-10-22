import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  product: any[] = [];
  decodedId: number | undefined;
  id_showroom: any;
  category: any = [];
  store: any = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private encodingService: EncodingServiceService,
    private route1: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const encodedId = params.get('id');
      if (encodedId) {
        this.decodedId = parseInt(this.encodingService.decode(encodedId), 10);
        this.id_showroom = this.decodedId; // Assign decodedId to id_category

        if (this.id_showroom) {
          this.fetchProducts(this.id_showroom);
        }
      }
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

  fetchProducts(id_category: number): void {
    this.api.get_product_for_each_showroom(id_category).subscribe({
      next: (data: any) => {
        console.log(data); // Log data to confirm structure

        // Ensure data is an array
        if (Array.isArray(data['data'])) {
          this.product = data['data'].map((item: any) => {
            return {
              ...item,
              new_id: btoa(item.id.toString()),
            };
          });

          // Set topic if data is not empty
        } else {
          console.error('Data is not an array:', data);
          this.product = []; // Default to empty array
        }
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
