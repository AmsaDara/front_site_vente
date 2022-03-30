import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../shared/user/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router:Router,
    private authenticationService:AuthenticateService
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser){
      return true;
    }

    this.router.navigate(['/allarticles'],{ queryParams: { returnUrl: state.url } });
    return false;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const currentUser = this.authenticationService.currentUserValue;
    
   if(currentUser){
      return true;
    }

    this.router.navigate(['/allarticles'],{ queryParams: { returnUrl: state.url } });
    return false;
  }
  
}