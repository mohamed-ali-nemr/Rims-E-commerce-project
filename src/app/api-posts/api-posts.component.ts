import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api-posts',
  templateUrl: './api-posts.component.html',
  styleUrls: ['./api-posts.component.css']
})
export class ApiPostsComponent {

  posts: any[] = [];

  constructor( private api: ApiService ) {

  }

  ngOnInit() {

    this.api.get_posts().subscribe({
      next: (data: any) => {
        console.log(data);
        // for(let emp of data){
        // //   emp.new_us_id=btoa(emp.us_id)
        // // emp.new_cat_pd_img=this.api.baseurl+emp.cat_pd_img
        // }
        this.posts = data['data'];
        
      }
    });

  }



}
