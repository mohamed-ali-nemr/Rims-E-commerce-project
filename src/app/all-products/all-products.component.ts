import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  product: any[] = [];
  category: any = [];
  store: any = [];

  constructor(
    private api: ApiService,
    private encodingService: EncodingServiceService,
    private route1: Router,
    private wishlistService: WishlistService,
  ) {}

  ngOnInit(): void {
    this.api.get_products().subscribe({
      next: (data: any) => {
        console.log(data);
        this.product = data['data'].map((item: any) => {
          return {
            ...item,
            new_id: btoa(item.id.toString()),
          };
        });
      },
      error: (err: any) => {
        console.error(err);
      },
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

  addToWishlist(item: any) {
    this.wishlistService.addToWishlist(item);
    alert(`${item.name} has been added to your wishlist!`);
  }

  isloginnav() {
    // console.log(this.route.url)
    return this.route1.url == '/login' || this.route1.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
