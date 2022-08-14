import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/user/user-models';
import { selectUserInfo } from 'src/app/user/user-store/user.connector';
import * as todoAction from './todo-list-store/todo-list.actions';
import { selectAllTodoList } from './todo-list-store/todo-list.connector';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  userInfo: UserModel;
  todoList = [];
  todoControl: FormControl = new FormControl('');
  constructor(private todoService: TodoListService,
    private store: Store) {

  }

  ngOnInit(): void {
    this.store.select(selectUserInfo).subscribe(user => {
      this.userInfo = user;
      this.getUserTodoList();
    });
    this.store.select(selectAllTodoList).subscribe((data: any) => {
      this.todoList = data;
    });
  }
  getUserTodoList() {
    this.todoService.getTodoList(this.userInfo.id).subscribe((resp: any) => {
      this.store.dispatch(todoAction.loadListSuccess({ list: resp }));
    });
  }

  addItem() {
    if (!this.todoControl.value) {
      return;
    }
    const todoTitle = this.todoControl.value;
    this.todoService.addItem(this.userInfo.id, { title: todoTitle }).subscribe((resp: any) => {
      this.store.dispatch(todoAction.addItem({ listItem: resp }));
      this.todoControl.reset();
    });
  }

  deleteItem(item) {
    console.log('İtem',item);
    this.todoService.deleteItem(this.userInfo.id, item.id).subscribe((resp: any) => {
      this.store.dispatch(todoAction.deleteItem({id:item.id}));
    });
  }
  checked(item){
    let status = item.status;
    this.todoService.patchItem(this.userInfo.id,item.id, { status: !status }).subscribe((resp: any) => {
      this.store.dispatch(todoAction.addItem({ listItem: resp }));
    });
  }
}
