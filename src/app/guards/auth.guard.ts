import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // api: any;
  constructor(private api:ApiService,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.api.IsLoggedIn()) {
      const userRole = this.api.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        if(userRole == 'admin'){
          this.router.navigate(['/dashboard']);
          }
        else if(userRole == 'client') {
          this.router.navigate(['/home']);
        }
        else if(userRole == 'employee') {
          this.router.navigate(['/dashboard']);
        }else{
        console.log("not found role");
        return false;
        }
      }
      else {
      return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}