import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListGuard } from '../user.guard';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { PagesComponent } from './pages.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'todo-list',
      component: TodoListComponent,

    },
    {
      path: 'user-list',
      component: UserListComponent,
      canActivate:[UserListGuard],

    },
   {
      path: 'no-auth',
      component: NoAuthComponent,

    },
    { path: '', redirectTo: 'todo-list', pathMatch: 'full' },

  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class PagesRoutingModule { }
