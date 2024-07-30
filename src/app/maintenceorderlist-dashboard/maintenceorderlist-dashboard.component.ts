import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-maintenceorderlist-dashboard',
  templateUrl: './maintenceorderlist-dashboard.component.html',
  styleUrls: ['./maintenceorderlist-dashboard.component.css']
})
export class MaintenceorderlistDashboardComponent {
  maintenance: any;
  p:number=1;
   
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
   
   

    this.api.get_all_maintenance_orders().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.maintenance = [];
        for (let item of data) {
          const order = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            car: item.car,
            subject: item.subject, 
            maintenance_center: item.maintenance_center,
            appointment:item.appointment
           
          };
          this.maintenance.push(order);
        }
        
      }
    });

}}