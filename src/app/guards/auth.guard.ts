import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _session:SessionService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._session.getToken() && this._session.getId()) {
        return this._session.verify()
        .pipe(
          map(() => true),
          catchError((e) => {
            this._session.logout();
            this.router.navigateByUrl('/login')
            return Observable.throw(e.statusText);
        })
        )
      }else{
        this._session.logout();
        this.router.navigateByUrl('/login')
      }

    }
  
}
