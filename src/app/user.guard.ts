import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanDeactivate, CanDeactivateFn, CanLoad, CanMatch, Resolve, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserNameService } from './user-name.service';
import { HiiComponent } from './hii/hii.component';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{
  constructor(private user : UserNameService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if(this.user.get()){
          return true
       }else{
        
        window.alert('You may Login first')
        return false
       }



      // return new Promise((resolve, reject)=> {
      //       setTimeout(()=> resolve(true),3000);
      // })
  }
}

@Injectable({
  providedIn: 'root'
})
export class Childguard implements CanActivateChild{

  canActivateChild(childRoute: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true

  }
}

@Injectable({
  providedIn: 'root'
})

export class UserCanDeactive implements CanDeactivate<AppComponent>{
  canDeactivate(
    component: AppComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot,
     nextState: RouterStateSnapshot):any{
      return component.CanDeactivede()   
  }
}


@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<any> {
 

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   
    return new Observable((observal)=> {
           observal.next(true)
    });
  }
}