import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostDetailsComponent } from './post-details/post-details.component';
import { postList } from './shared/post-list';

@Injectable({
  providedIn: 'root'
})
export class PostExistsGuardGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(route.paramMap.get('id') != "5") {
      return true;
    }
  }
    
  
}
