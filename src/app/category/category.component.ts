
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
//   product: any = [];
//   topic:any=[];
//   idcategory: any;
  
//   constructor(private route: ActivatedRoute, private api: ApiService) { }
//   ngOnInit(): void {
//     const hashedId = this.route.snapshot.paramMap.get('cat_id');
//     if(hashedId){
//     this.idcategory = atob(hashedId);
//     }else {
//       console.error('ID parameter is missing');
//     }
//     let cond = 'pd_category_ID=' + this.idcategory;
//     this.api.get_products(cond).subscribe({
//       next: (data: any) => {
//         console.log(data);
//         for(let emp of data){
//           emp.new_pd_id=btoa(emp.pd_id)
          
//           // emp.file=this.apiservice.baseURL+emp.file
//         }
//         this.product = data;
//         this.topic=data[0];

//       }
//     });

//   }
}