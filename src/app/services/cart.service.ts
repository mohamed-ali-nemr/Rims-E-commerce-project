import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface CartItem {
  id: string;
  name_cars: string;
  price_cars: number;
  image_link: string;
  quantity?: number; // Add quantity field if not present
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // orders
  private selectedItemsSource = new BehaviorSubject<any[]>([]);
  selectedItems$ = this.selectedItemsSource.asObservable();

  // checkout
  private selectedItemsSubject = new BehaviorSubject<any[]>([]);
  selectedItems1$ = this.selectedItemsSubject.asObservable();

  addSelectedItem(item: any): void {
    const currentItems = this.selectedItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.selectedItemsSubject.next(updatedItems);
  }

  getSelectedItems(): any[] {
    return this.selectedItemsSource.value;
  }

  clearSelectedItems(): void {
    this.selectedItemsSource.next([]);
  }

  private cartItemsSubject: BehaviorSubject<CartItem[]>;
  cartItems$;

  constructor() {
    const savedItems = localStorage.getItem('cartItems');
    const cartItems = savedItems ? JSON.parse(savedItems) : [];
    this.cartItemsSubject = new BehaviorSubject<CartItem[]>(cartItems);
    this.cartItems$ = this.cartItemsSubject.asObservable();
  }

  private saveCartItems(items: CartItem[]) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const existingItemIndex = currentItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Update the existing item's quantity
      const existingItem = currentItems[existingItemIndex];
      const newQuantity = (existingItem.quantity || 0) + 1; // Increase quantity
      if (newQuantity > 5) {
        // Max quantity check
        alert('Cannot add more than 5 items of the same type to the cart.');
        return; // Exit the function if quantity exceeds the limit
      }
      currentItems[existingItemIndex] = {
        ...existingItem,
        quantity: newQuantity,
      };
    } else {
      // Add new item with quantity 1
      const newItem = { ...item, quantity: 1 };
      currentItems.push(newItem);
    }

    this.cartItemsSubject.next(currentItems);
    this.saveCartItems(currentItems);
  }

  removeFromCart(itemId: string) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(
      (cartItem) => cartItem.id !== itemId
    );
    this.cartItemsSubject.next(updatedItems);
    this.saveCartItems(updatedItems);
  }

  updateItemQuantity(itemId: string, quantity: number) {
    const currentItems = this.cartItemsSubject.value;
    const itemIndex = currentItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (itemIndex !== -1) {
      if (quantity > 5) {
        // Max quantity check
        alert('Cannot set quantity to more than 5.');
        return; // Exit the function if quantity exceeds the limit
      }
      const item = currentItems[itemIndex];
      currentItems[itemIndex] = { ...item, quantity };
      this.cartItemsSubject.next(currentItems);
      this.saveCartItems(currentItems);
    }
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }

  getCartItemCount() {
    return this.cartItemsSubject.value.length;
  }

  get cartItemCount$() {
    return this.cartItemsSubject
      .asObservable()
      .pipe(map((items) => items.length));
  }
}
