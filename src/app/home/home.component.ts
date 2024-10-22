import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingServiceService } from '../services/encoding-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  category:any=[];
  first_category:any=[];
  end_category:any=[];
  store:any=[];
  kits:any=[];
  products:any=[];
 image_link:any
 name:any
  description: any;
  pd_name: any;
  price: any;
  
  constructor(private route: ActivatedRoute,private api:ApiService, private encodingService: EncodingServiceService) {}
  ngOnInit(): void {

   // The `map` method is used to transform each item in the array.
        // Here, we are transforming each item in the `data` array into a new object
        // with an additional `encodedId` property. 
    
    this.api.get_categories_except_kits().subscribe({
      next: (data: any) => {
        console.log(data);
        this.category = data['data'].map((item: any) => {
          return {
            ...item,
            encodedId: this.encodingService.encode(item.id.toString())
          };
        });
      },
      error: (err: any) => {
        console.error(err);
      }
    });

///////////////////////////////////////////////

    this.api.get_first_three_category().subscribe
    ({next:(data:any)=>{
      console.log(data);
      
      this.first_category=data['data'].map((item: any) => {
        return {
          ...item,
          encodedId: this.encodingService.encode(item.id.toString())
        };
      });
    },
    error: (err: any) => {
      console.error(err);
    }
  });

///////////////////////////////////////////////////////
    this.api.get_seconde_three_category().subscribe
    ({next:(data2:any)=>{
      console.log(data2);
     
      this.end_category=data2['data'].map((item: any) => {
        return {
          ...item,
          encodedId: this.encodingService.encode(item.id.toString())
        };
      });
    },
    error: (err: any) => {
      console.error(err);
    }
  });

    ////////////////////////////////

    this.api.get_showrooms().subscribe
    ({next:(data3:any)=>{
      console.log(data3);
      
      this.store=data3['data'].map((item: any) => {
        return {
          ...item,
          encodedId: this.encodingService.encode(item.id.toString())
        };
      });
    },
    error: (err: any) => {
      console.error(err);
    }
  });

    /////////////////////////////////////////

    this.api.get_body_kit_category().subscribe({
      next: (data4: any) => {
        console.log(data4); // Log data to confirm structure
    
        // Ensure data4['data'] is an array with at least one item
        if (Array.isArray(data4['data']) && data4['data'].length > 0) {
          // Access the first item in the array, which should be an object
          const firstItem = data4['data'][0];
          this.image_link=firstItem['image_link'];
          this.name=firstItem['name'];
          this.pd_name=firstItem['pd_name'];
          this.price=firstItem['price'];

          this.description=firstItem['description'];

          
          console.log( this.image_link);
          console.log(this.name);
          
          
          
    
          // Check if firstItem is an object and map its properties
          if (firstItem) {
            this.kits = [{
              encodedId: this.encodingService.encode(firstItem.id.toString())
              

            }];
          } else {
            this.kits = []; // Default to empty array if firstItem is not valid
          }
        } else {
          this.kits = []; // Default to empty array if data4['data'] is not valid
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
    
    
  }
  image(image: any) {
    throw new Error('Method not implemented.');
  }

}