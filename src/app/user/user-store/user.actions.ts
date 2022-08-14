// Customers

import { createAction, props } from "@ngrx/store";
import { UserModel } from "../user-models";


const loadUserSuccess =
createAction('[User] Load User Success', props<{ user: UserModel }>());
const logOutUser = createAction('[User] Clear User');
const loadUserFail = createAction('[User] Load User Fail', props<String>());

const logoutUser = createAction('logoutUser');

const logoutUserSuccess = createAction('logoutUserSuccess');
export {
    loadUserSuccess,
    logOutUser,
    loadUserFail,
    logoutUser,
    logoutUserSuccess,
};
