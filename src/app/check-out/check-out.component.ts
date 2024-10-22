import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;
  category: any = [];
  store: any = [];
  selectedItems: any[] = [];

  constructor(
    private route: Router,
    private api: ApiService,
    private cartService: CartService,
    private encodingService: EncodingServiceService
  ) {
    
  }

  ngOnInit(): void {
    this.cartService.selectedItems1$.subscribe(items => {
      console.log('Selected Items:', items); // Debug log
      this.selectedItems = items.map(item => ({
        ...item,
        price: parseFloat(item.price),
        quantity: parseInt(item.quantity, 10)
      }));
      this.calculateTotalPrice();
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


  calculateTotalPrice(): void {
    this.totalPrice = this.selectedItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
  
      // Debug statements
      console.log(`Item: ${item.name}`);
      console.log(`Price: ${price}, Quantity: ${quantity}`);
  
      if (isNaN(price) || isNaN(quantity)) {
        console.error('Invalid price or quantity', item);
        return total; // Skip this item if price or quantity is invalid
      }
  
      return total + (price * quantity);
    }, 0);
  
    console.log('Total Price:', this.totalPrice);
  }
  

  isloginnav() {
    // console.log(this.route.url)
    return this.route.url == '/login' || this.route.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
