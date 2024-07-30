import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productlist-dashboard',
  templateUrl: './productlist-dashboard.component.html',
  styleUrls: ['./productlist-dashboard.component.css']
})
export class ProductlistDashboardComponent {
  products: any = [];
  users:any=[];
  category:any=[];
  posts:any=[];
  showroom:any=[];
  imgs:any=[];
  fpost: any=[];
  imporpost: any;
  idpost: any;
  time: string = '';
  intervalId: any;
  visits: number = 0;
  buy: number=0;
  p: number = 1;
  

  
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
   
   
   
    this.api.get_posts().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.posts = data['data'];
        
      }
    });

    this.api.get_categories().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.category = data['data'];
        
      }
    });

    this.api.get_products().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.products = data['data'];
        
      }
    });


    this.api.get_showrooms().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.showroom = data['data'];
        
      }

    })

    this.api.get_user().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.users = data;
        
      }

    })


}
}