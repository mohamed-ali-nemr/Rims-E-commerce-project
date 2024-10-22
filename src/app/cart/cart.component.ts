import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  @Input() product: any;
  topic: any = {};
  decodedId: number | undefined;
  id_product: number | undefined;
  review: any[] = [];
  formreview!: FormGroup;
  quantity: number = 1;
  totalPrice: number = 0;
  quantityOptions: number[] = [];
  p: number = 1;
  category: any = [];
  store: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private api: ApiService,
    private encodingService: EncodingServiceService,
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
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

  proceedToCheckout(itemId: number): void {
    console.log('checked clicked ', itemId);
    const selectedItem = this.cartItems.find(item => item.id === itemId);
    if (selectedItem) {
      const userId = JSON.parse(localStorage.getItem('user_data_login') || '{}').id;
      const orderData = {
        user_id: userId,
        product_id: selectedItem.id,
        name_cars: selectedItem.name,
        price_cars: selectedItem.price,
        Qauntity: selectedItem.quantity, // Use 'Qauntity' as expected by your API
      };
  
      this.cartService.addSelectedItem(orderData);
  
      // Insert order into the database (if needed here)
      this.api.insert_order(orderData).subscribe({
        next: (data: any) => {
          alert('Order created successfully');
        },
        error: (err: any) => {
          console.error(err);
          alert('Failed to create order');
        },
      });
    }
  }
  
  navigateToCheckout(): void {
    this.router.navigate(['/check-out']);
  }

  saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItem(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }

  updateQuantity(itemId: string, quantity: string) {
    const parsedQuantity = parseInt(quantity, 10); // Ensure the value is an integer
    if (parsedQuantity >= 1 && parsedQuantity <= 5) {
      this.cartService.updateItemQuantity(itemId, parsedQuantity);
    } else {
      alert('Quantity must be between 1 and 5.');
    }
  }

  populateQuantityOptions(): void {
    if (this.product && this.product.stock) {
      this.quantityOptions = Array.from(
        { length: this.product.stock },
        (_, i) => i + 1
      );
    }
  }

  calculateTotalPrice(): void {
    if (this.product && this.product.offer > 0) {
      this.totalPrice = this.quantity * this.product.offer;
    } else if (this.product) {
      this.totalPrice = this.quantity * this.product.price;
    }
  }

  incrementQuantity(): void {
    if (this.quantity < this.product.stock) {
      this.quantity++;
      this.calculateTotalPrice();
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateTotalPrice();
    }
  }

  onQuantityInputChange(event: any): void {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    this.quantity = parseInt(value, 10);
    if (isNaN(this.quantity) || this.quantity < 1) {
      this.quantity = 1;
    } else if (this.quantity > this.product.stock) {
      this.quantity = this.product.stock;
    }
    event.target.value = this.quantity;
    this.calculateTotalPrice();
  }

  isloginnav() {
    // console.log(this.route.url)
    return this.router.url == '/login' || this.router.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
