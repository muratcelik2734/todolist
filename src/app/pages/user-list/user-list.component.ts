import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/user/user.service';
import * as userLisAction from './user-list-store/user-list.actions';
import { selectAllUserList } from './user-list-store/user-list.connector';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList;
  constructor(private userService: UserService,
              private store: Store) { }

  ngOnInit(): void {
    this.getUserTodoList();
    this.store.select(selectAllUserList).subscribe((data: any) => {
      console.log('UserLis',data);
      this.userList = data;
    });
  }

  getUserTodoList() {
    this.userService.getAllUsers().subscribe((resp: any) => {
      this.store.dispatch(userLisAction.loadListSuccess({ list: resp }));
    });
  }

  updateStatus(item){
    console.log('User ITe',item);
    const userType = item.userType;
    this.userService.patchUser(item.id, { userType: !userType }).subscribe((resp: any) => {
      this.store.dispatch(userLisAction.patchItem({ listItem: resp }));
    });
  }
}
