import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categorylist-dashboard',
  templateUrl: './categorylist-dashboard.component.html',
  styleUrls: ['./categorylist-dashboard.component.css']
})
export class CategorylistDashboardComponent {
  category: any;
  p:number=1;
   
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
   
   

    this.api.get_categories().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.category = data['data'];
        
      }
    });

}}