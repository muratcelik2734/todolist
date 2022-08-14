import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logOutUser } from 'src/app/user/user-store/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.store.dispatch(logOutUser());
    this.router.navigateByUrl('/user');
  }

}
