import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../user-models';
import * as userActions from './user.actions';

interface UserInfoState extends UserModel{}


const defaultUserInfoState: UserInfoState = {
    id: null,
    name:null,
    surname: null,
    userType: null,
    email: null,
    password: null
};


const userInfoReducer = createReducer(
    defaultUserInfoState,
    on(userActions.logOutUser, (state) => {
        return { ...state, ...defaultUserInfoState };
    }),
    on(userActions.loadUserSuccess, (state, user) => {
        console.log('Reducer Add User',user);
        return { ...state, ...user.user };
    }),
    on(userActions.loadUserFail, (state, prop) => {
        return { ...state, loading: false, error: prop, logouting: false };
    }),
    
    on(userActions.logoutUserSuccess, (state) => {
        return { ...state, user: null, logouting: false };
    }),
);

function UserInfoReducer(action, state) {
    return userInfoReducer(action, state);
}

export {
    UserInfoState,
    defaultUserInfoState,
    UserInfoReducer,
};
