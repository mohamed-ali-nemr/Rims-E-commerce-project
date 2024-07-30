import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-orderlist-dashboard',
  templateUrl: './orderlist-dashboard.component.html',
  styleUrls: ['./orderlist-dashboard.component.css']
})
export class OrderlistDashboardComponent {
  orders: any;
  p:number=1;
   
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
   
   

    this.api.get_all_orders().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.orders = [];
        for (let item of data) {
          const order = {
            id: item.id,
            user_id: item.user_id,
            product_id: item.product_id,
            quantity: item.Qauntity,
            total_price: item.total_price,
            user: item.user, 
            product: item.product 
           
          };
          this.orders.push(order);
        }
        
      }
    });

}}