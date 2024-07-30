import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
// import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//   @Input() rating: number = 3;
//   @Input() maxRating: number = 5;

//   stars: boolean[] = [];

//   first_category:any=[]
//   end_category:any=[]
  
//   constructor(private route: ActivatedRoute) {}
//   ngOnInit(): void {
//     this.stars = Array(this.maxRating).fill(false).map((_, index) => index < this.rating);

//     // let iduser=this.route.snapshot.paramMap.get('pd_id')
//     // console.log(iduser);
//     // let cond = 'pd_id='+iduser
//     this.api.get_first_cat('').subscribe
//     ({next:(data:any)=>{
//       console.log(data);
//       for(let emp of data){
//         emp.new_cat_id=btoa(emp.cat_id)
        
//         // emp.file=this.apiservice.baseURL+emp.file
//       }
//       this.first_category=data;
//     }})

//     this.api.get_second_cat('').subscribe
//     ({next:(data2:any)=>{
//       console.log(data2);
//       for(let emp of data2){
//         emp.new_cat_id=btoa(emp.cat_id)
        
//         // emp.file=this.apiservice.baseURL+emp.file
//       }
//       this.end_category=data2;
//     }})
//   }
// // Mobiles=[{id:'1',name:'IPHONE 10',description:' ',cost:'300',img:'assets/1mob.png',
// // review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted',page:'category/{{item.pd_category_ID}}'},
// // {id:'2',name:'Accesable watche',description:' ',cost:'140',img:'assets/2wch.png',
// // review:'Reviews (36)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted',page:'category/{{item.pd_category_ID}}'},
// // {id:'3',name:'Airbuds bro',description:' ',cost:'240',img:'assets/2airbuds.png',
// // review:'Reviews (36)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted',page:'category/{{item.pd_category_ID}}'}

// // ]






// Lastpost=[{id:'1',name:'Ps',description:' ',cost:'410',img:'assets/1ps.png',
// review:'Reviews (44)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted',page:'category/{{item.pd_category_ID}}'},
// {id:'2',name:'Airbuds bro',description:' ',cost:'240',img:'assets/2airbuds.png',
// review:'Reviews (36)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted',page:'category/{{item.pd_category_ID}}'},
// {id:'3',name:' magic camera',description:' ',cost:'280.00',img:'assets/3camera.png',
// review:'Reviews (43)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted',page:'category/{{item.pd_category_ID}}'}
// ]
}