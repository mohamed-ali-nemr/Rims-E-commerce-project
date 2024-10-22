import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { EncodingServiceService } from '../services/encoding-service.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  category: any = [];
  store: any = [];
  items: any[] = [];

  constructor(
    private cartService: CartService,
    private route: Router,
    private api: ApiService,
    private wishlistService: WishlistService,
    private encodingService: EncodingServiceService
  ) {}

  ngOnInit() {
    this.items = this.wishlistService.getWishlist();
    console.log('Wishlist items on init:', this.items);

    //       // Add to ngOnInit or another method temporarily for testing
    // this.wishlistService.addToWishlist({ id: 1, name: 'Test Item', image_link: 'test.jpg', description: 'Test description' });
    // this.items = this.wishlistService.getWishlist();
    // console.log('Wishlist items after manual addition:', this.items);

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

  // addToCart(car: any) {
  //   this.cartService.addToCart(car);
  //   alert(`${car.name} has been added to the cart!`);
  // }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  removeFromWishlist(item: any) {
    this.wishlistService.removeFromWishlist(item);
    this.items = this.wishlistService.getWishlist(); // Update local items array
  }

  isloginnav() {
    return this.route.url == '/login' || this.route.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
