import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userlist-dashboard',
  templateUrl: './userlist-dashboard.component.html',
  styleUrls: ['./userlist-dashboard.component.css']
})
export class UserlistDashboardComponent {



  users:any=[];

  p: number = 1;
  

  
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
   
  
    this.api.get_user().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.users = data;
        
      }

    })

  }

  
}