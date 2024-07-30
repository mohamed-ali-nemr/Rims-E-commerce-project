import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  product:any=[]
  message:any

  id:any
  
  
  constructor(private route: ActivatedRoute,private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log("hooooooo");
    
    console.log(this.id);

    this.api.getProductById(this.id)
    .subscribe({ next:(data:any)=>{
      console.log(data)
      
      this.product=data['product'];
    }});

  
  }

  delete(){
    this.api.delete_product(this.id).subscribe({
      next:(data:any)=>{
        this.message=data['message'];
        this.router.navigate(['productlist-dashboard']);
      }
    })
  }
}