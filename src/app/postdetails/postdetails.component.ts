import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent {

  post:any=[]
  message:any

  id:any
  
  
  constructor(private route: ActivatedRoute,private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log("hooooooo");
    
    console.log(this.id);

    this.api.get_post_by_id(this.id)
    .subscribe({ next:(data:any)=>{
      console.log(data)
      
      this.post=data['post'];
    }});

  
  }

  delete(){
    this.api.delete_posts(this.id).subscribe({
      next:(data:any)=>{
        if(data){
          this.router.navigate(['postlist-dashboard'])
        }
      }
    })
  }


}