import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectUserInfo } from "./user/user-store/user.connector";

@Injectable({
  providedIn: 'root',
})
/*
   Eğer Kullanıcı login olduysa login ekranına girişini engelliyorum
*/
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store,
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(obs => {
      this.store.select(selectUserInfo).subscribe(user => {

        if (!user.id) {
          obs.next(false);
          this.router.navigateByUrl('user');
        } else {
          obs.next(true);
        }
      });
    });
  }
}

@Injectable({
  providedIn: 'root',
})

export class UserListGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store,
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(obs => {
      this.store.select(selectUserInfo).subscribe(user => {

        if (user.userType) {
          obs.next(true);
        } else {
          obs.next(false);
          this.router.navigateByUrl('pages/no-auth');
        }
      });
    });
  }
}
