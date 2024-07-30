import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit, OnDestroy {
  products: any = [];
  users:any=[];
  category:any=[];
  posts:any=[];
  showroom:any=[];
  imgs:any=[];
  fpost: any=[];
  imporpost: any;
  idpost: any;
  time: string = '';
  intervalId: any;
  visits: number = 0;
  buy: number=0;
  p: number = 1;
  reports: any ='';
  

  
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
   
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);

    this.updateVisits();
    this.intervalId = setInterval(() => this.updateVisits(), 100000);


   
    this.api.get_posts().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.posts = data['data'];
        
      }
    });

    this.api.get_categories().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.category = data['data'];
        
      }
    });

    this.api.get_products().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.products = data['data'];
        
      }
    });


    this.api.get_showrooms().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.showroom = data['data'];
        
      }

    })

    this.api.get_user().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.users = data;
        
      }

    })

    // this.api.get_users().subscribe({
    //   next: (data: any) => {
    //     console.log(data);
       
    //     this.users = data['data'];
        
    //   }
    // });


    // this.api.getFirstTwoPosts().subscribe({
    //   next: (data: any) => {
    //     console.log(data);
       
    //     this.fpost = data;
        
        
    //   }
    // });
    // this.api.get_improtant_post().subscribe({
    //   next: (data: any) => {
    //     console.log(data);
       
    //     this.imporpost = data;
        
        
    //   }
    // });
    // this.api.get_post_by_id(2).subscribe({
    //   next: (data: any) => {
    //     console.log(data);
       
    //     this.idpost = data;
        
        
    //   }
    // });
  }







  
///////////////////////////////////////////////////////////////////
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateTime(): void {
    const today = new Date();
    const hh = this.addLeadingZero(today.getHours());
    const mm = this.addLeadingZero(today.getMinutes());
    const ss = this.addLeadingZero(today.getSeconds());
    this.time = `${hh}:${mm}:${ss}`;
  }

  addLeadingZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  ////////////////////////////////////////////////////////////////
 
  updateVisits(): void {
    this.visits = this.getRandomInt(0, 100);
    this.reports=this.getRandomInt(0,10);
    this.buy=this.getRandomInt(0, 1000);
     // Generates a random number between 0 and 100
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




}