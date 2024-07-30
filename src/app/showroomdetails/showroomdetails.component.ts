import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-showroomdetails',
  templateUrl: './showroomdetails.component.html',
  styleUrls: ['./showroomdetails.component.css']
})
export class ShowroomdetailsComponent {
  showroom:any=[]
  message:any

  id:any
  
  
  constructor(private route: ActivatedRoute,private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log("hooooooo");
    
    console.log(this.id);

    this.api.get_showroom_by_id(this.id)
    .subscribe({ next:(data:any)=>{
      console.log(data)
      
      this.showroom=data['showroom'];
    }});

  
  }
  delete(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    console.log(this.id);
   
   
    this.api.delete_showroom(this.id)
      .subscribe({  next: (data: any) => {
             console.log(data);
             this.message=data['message']
             this.router.navigate(['showroomlist-dashboard']);
          // Redirect or perform any other action after successful deletion
        },
        error: (err: any) => {
          console.log(err);
          // Handle error
        }
      });
    }
  

}