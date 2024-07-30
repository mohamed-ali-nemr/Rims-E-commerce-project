import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-postlist-dashboard',
  templateUrl: './postlist-dashboard.component.html',
  styleUrls: ['./postlist-dashboard.component.css']
})
export class PostlistDashboardComponent {
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  posts:any=[];
  p: number = 1;
  ngOnInit(): void {
   

   
    this.api.get_posts().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.posts = data['data'];
        
      }
    });
}}