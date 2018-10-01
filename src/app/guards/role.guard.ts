import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../model/index';
@Injectable()
export class RoleGuard implements CanActivate {
 isAdmin: boolean;

    constructor(private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    var  user:User;
        user =  JSON.parse(localStorage.getItem('currentUser'))
        console.log(user.isAdmin);
        if ((user.isAdmin==true)) {

            console.log('dostep do strony admina');
            return true;
        }
            console.log('nain')
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
  }
