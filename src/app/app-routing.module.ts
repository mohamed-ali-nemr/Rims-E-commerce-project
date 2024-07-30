import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// dashboard imports
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { UserformComponent } from './userform/userform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PostformComponent } from './postform/postform.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ShowroomformComponent } from './showroomform/showroomform.component';
import { UserlistDashboardComponent } from './userlist-dashboard/userlist-dashboard.component';
import { PostlistDashboardComponent } from './postlist-dashboard/postlist-dashboard.component';
import { ProductlistDashboardComponent } from './productlist-dashboard/productlist-dashboard.component';
import { CategorylistDashboardComponent } from './categorylist-dashboard/categorylist-dashboard.component';
import { ShowroomlistDashboardComponent } from './showroomlist-dashboard/showroomlist-dashboard.component';
import { ShowroomdetailsComponent } from './showroomdetails/showroomdetails.component';
import { OrderlistDashboardComponent } from './orderlist-dashboard/orderlist-dashboard.component';
import { MaintenceorderlistDashboardComponent } from './maintenceorderlist-dashboard/maintenceorderlist-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail', component: ProdDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'wish-list', component: WishlistComponent },

  // {path:'category/:id',component:CategoryComponent,canActivate:[AuthGuard]},
  // {path:'card/:id',component:CardComponent,canActivate:[AuthGuard]},

  // { path: 'api-posts', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },

  // dashboard routes
  // {path:'',redirectTo:'dashboard',pathMatch:'full'},

  { path: 'dashboard', component: DashboardComponent }, // Dashboard route
  { path: 'userlist-dashboard', component: UserlistDashboardComponent },
  { path: 'postlist-dashboard', component: PostlistDashboardComponent },
  { path: 'productlist-dashboard', component: ProductlistDashboardComponent },
  { path: 'categorylist-dashboard', component: CategorylistDashboardComponent },
  { path: 'showroomlist-dashboard', component: ShowroomlistDashboardComponent },
  { path: 'orderlist-dashboard', component: OrderlistDashboardComponent },
  {
    path: 'maintenceorderlist-dashboard',
    component: MaintenceorderlistDashboardComponent,
  },

  { path: 'productform', component: ProductformComponent },
  { path: 'productform/:id', component: ProductformComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },

  { path: 'categoryform', component: CategoryformComponent },
  { path: 'categoryform/:id', component: CategoryformComponent },
  { path: 'categorydetails/:id', component: CategorydetailsComponent },

  { path: 'postform', component: PostformComponent },
  { path: 'postform/:id', component: PostformComponent },
  { path: 'postdetails/:id', component: PostdetailsComponent },

  { path: 'showroomform', component: ShowroomformComponent },
  { path: 'showroomform/:id', component: ShowroomformComponent },
  { path: 'showroomdetails/:id', component: ShowroomdetailsComponent },

  { path: 'userform', component: UserformComponent },
  { path: 'userform/:id', component: UserformComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
