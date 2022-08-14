import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TodoListService } from './todo-list/todo-list.service';
import { UserService } from '../user/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
@NgModule({
  declarations: [
    PagesComponent,
    TodoListComponent,
    NavbarComponent,
    UserListComponent,
    NoAuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    RouterModule,

  ],

  providers: [TodoListService,UserService],
  bootstrap: []
})
export class PagesModule { }
