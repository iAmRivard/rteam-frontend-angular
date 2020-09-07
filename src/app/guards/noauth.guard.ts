import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';


@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
  constructor(private _session: SessionService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._session.getToken() != "null" && this._session.getId() != "null") {
      this.router.navigateByUrl('/app');
      return false;
    } else {
      return true;
    }
  }

}
