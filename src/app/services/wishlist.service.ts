import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface WishlistItem {
  name: string;
  image_link: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItemsSubject: BehaviorSubject<WishlistItem[]>;
  wishlistItems$;

  constructor() {
    const savedItems = localStorage.getItem('wishlistItems');
    const wishlistItems = savedItems ? JSON.parse(savedItems) : [];
    this.wishlistItemsSubject = new BehaviorSubject<WishlistItem[]>(wishlistItems);
    this.wishlistItems$ = this.wishlistItemsSubject.asObservable();
  }

  private saveWishlistItems(items: WishlistItem[]) {
    localStorage.setItem('wishlistItems', JSON.stringify(items));
  }

  addToWishlist(item: WishlistItem) {
    const currentItems = this.wishlistItemsSubject.value;
    if (!currentItems.some(wishlistItem => wishlistItem.name === item.name)) {
      const updatedItems = [...currentItems, item];
      this.wishlistItemsSubject.next(updatedItems);
      this.saveWishlistItems(updatedItems);
    }
  }

  removeFromWishlist(item: WishlistItem) {
    const currentItems = this.wishlistItemsSubject.value;
    const updatedItems = currentItems.filter(wishlistItem => wishlistItem.name !== item.name);
    this.wishlistItemsSubject.next(updatedItems);
    this.saveWishlistItems(updatedItems);
  }

  getWishlist() {
    return this.wishlistItemsSubject.value;
  }

  getWishlistCount() {
    return this.wishlistItemsSubject.value.length;
  }
}
