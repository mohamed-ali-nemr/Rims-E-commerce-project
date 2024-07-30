import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent {
//   product_card: any = [];
//   product_add_card: any = [];
//   idproduct:any;
 

//   // topic:any=[];
//   constructor(private route: ActivatedRoute, private api: ApiService ) { }
//   ngOnInit(): void {
//     const hashedId = this.route.snapshot.paramMap.get('pd_id');
//     if(hashedId){
//     this.idproduct = atob(hashedId);
//     }else{
//       console.error('ID parameter is missing');
//     }
//     console.log(this.idproduct);
//     let cond = 'pd_id=' + this.idproduct;
//     this.api.get_products(cond).subscribe({
//       next: (data: any) => {
//         console.log(data[0]);
//         for(let emp of data){
//           emp.new_pd_id=btoa(emp.pd_id)
        
          
//           // emp.file=this.apiservice.baseURL+emp.file
//         }
//         this.product_card = data[0];
//       }
//     });


//     // let us_id= localStorage.getItem('user-data-login');
//     // const hashedIdd = this.route.snapshot.paramMap.get('pd_id');
//     // if(hashedIdd){
//     // this.idproduct = atob(hashedIdd);
//     // }else{
//     //   console.error('ID parameter is missing');
//     // }
//     // console.log(this.idproduct);
    

//     // let condt = 'id_product=' + this.idproduct + '&id_user=' + us_id;
//     // this.api.insert_usercard(condt).subscribe({
//     //   next: (data: any) => {
//     //     console.log(data[0]);
//     //     this.product_add_card = data[0];
//     //   }
//     // });


//   }
}
