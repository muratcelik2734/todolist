

/** User Section */

import { ActionReducer, combineReducers, createFeatureSelector } from "@ngrx/store";
import { compose } from "@ngrx/store";
import { defaultTodoState, TodoReducer, TodoState } from "./pages/todo-list/todo-list-store/todo-list.reducer";
import { defaultUserListState, UserListReducer, UserListState } from "./pages/user-list/user-list-store/user-list.reducer";
import { logOutUser, logoutUserSuccess } from "./user/user-store/user.actions";
import { defaultUserInfoState, UserInfoReducer, UserInfoState } from "./user/user-store/user.reducer";

const userReducers = {
    UserInfo: UserInfoReducer,
    TodoList: TodoReducer,
    UserList: UserListReducer
};

interface UserState {
    UserInfo: UserInfoState;
    TodoList: TodoState;
    UserList: UserListState;
}

const defaultUserStates = {
    UserInfo: defaultUserInfoState,
    TodoList: defaultTodoState,
    UserList: defaultUserListState,
};

const userReducer: ActionReducer<UserState> = compose(
    (rootReducer: Function) => {
        return function (state, action) {
            if (action.type === logOutUser.type) {
                state = defaultUserStates;
            }
            return rootReducer(state, action);
        };
    }, combineReducers)(userReducers);

function UserReducer(state: any, action: any) {
    return userReducer(state, action);
}

const getUserStateSelector = createFeatureSelector<UserState>('User');


export {
    UserReducer,
    UserState,
    getUserStateSelector,
};
