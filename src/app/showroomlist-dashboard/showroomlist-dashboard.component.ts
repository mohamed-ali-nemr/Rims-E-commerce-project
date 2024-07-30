import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-showroomlist-dashboard',
  templateUrl: './showroomlist-dashboard.component.html',
  styleUrls: ['./showroomlist-dashboard.component.css']
})
export class ShowroomlistDashboardComponent {
  showroom:any=[];
  p:number=1;
  id: any;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
   
    
    

    this.api.get_showrooms().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.showroom = data['data'];
        console.log(this.showroom);
        // this.id=this.showroom[0]['id'];
        // console.log( this.id);
        
        
        
      }

    });
  }
  


}