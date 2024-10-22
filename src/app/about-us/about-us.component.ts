import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  category: any = [];
  store: any = [];

  constructor(
    private route: Router,
    private api: ApiService,
    private encodingService: EncodingServiceService
  ) {}
  ngOnInit() {
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

  isloginnav() {
    // console.log(this.route.url)
    return this.route.url == '/login' || this.route.url == '/register';
  }

  logout() {
    localStorage.removeItem('user_data_login');
  }
}
