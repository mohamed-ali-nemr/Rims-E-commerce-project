import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiPostsComponent } from './api-posts/api-posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { CartComponent } from './cart/cart.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgxPaginationModule } from 'ngx-pagination';

// imports for dashboard
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategorylistDashboardComponent } from './categorylist-dashboard/categorylist-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenceorderlistDashboardComponent } from './maintenceorderlist-dashboard/maintenceorderlist-dashboard.component';
import { OrderlistDashboardComponent } from './orderlist-dashboard/orderlist-dashboard.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostformComponent } from './postform/postform.component';
import { PostlistDashboardComponent } from './postlist-dashboard/postlist-dashboard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductlistDashboardComponent } from './productlist-dashboard/productlist-dashboard.component';
import { ShowroomdetailsComponent } from './showroomdetails/showroomdetails.component';
import { ShowroomformComponent } from './showroomform/showroomform.component';
import { ShowroomlistDashboardComponent } from './showroomlist-dashboard/showroomlist-dashboard.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserformComponent } from './userform/userform.component';
import { UserlistDashboardComponent } from './userlist-dashboard/userlist-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MaintenanceOrderComponent } from './maintenance-order/maintenance-order.component';
import { StoreComponent } from './store/store.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { OrdersDoneComponent } from './orders-done/orders-done.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ApiPostsComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    CheckOutComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    ProdDetailComponent,
    CartComponent,
    MaintenanceComponent,
    WishlistComponent,
    CategorydetailsComponent,
    CategoryformComponent,
    CategorylistDashboardComponent,
    DashboardComponent,
    MaintenceorderlistDashboardComponent,
    OrderlistDashboardComponent,
    PostdetailsComponent,
    PostformComponent,
    PostlistDashboardComponent,
    ProductdetailsComponent,
    ProductformComponent,
    ProductlistDashboardComponent,
    ShowroomdetailsComponent,
    ShowroomformComponent,
    ShowroomlistDashboardComponent,
    UserdetailsComponent,
    UserformComponent,
    UserlistDashboardComponent,
    MaintenanceOrderComponent,
    StoreComponent,
    AllProductsComponent,
    OrdersDoneComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
