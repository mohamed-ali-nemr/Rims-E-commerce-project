import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent {
  category:any=[]
  message:any

  id:any
  
  
  constructor(private route: ActivatedRoute,private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log("hooooooo");
    
    console.log(this.id);

    this.api.getCategoryById(this.id)
    .subscribe({ next:(data:any)=>{
      console.log(data)
      
      this.category=data['category'];
    }});

  
  }
  delete(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // if(hashedId){
    //   this.id = atob(hashedId);
    //   console.log(this.id);
    // }else{
    //   console.error('ID parameter is missing');
    // }
    console.log(this.id);
   
   
    this.api.delete_category(this.id)
      .subscribe({  next: (data: any) => {
             console.log(data);
             this.message=data['message']
             this.router.navigate(['categorylist-dashboard']);
          // Redirect or perform any other action after successful deletion
        },
        error: (err: any) => {
          console.log(err);
          // Handle error
        }
      });
    }
  
}