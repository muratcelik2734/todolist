import { createSelector } from "@ngrx/store";
import * as fromRoot from './../../../app-state';
import { userListAdapter } from "./user-list.reducer";
const getUserListFeatureState = createSelector(
        fromRoot.getUserStateSelector, (state: fromRoot.UserState) => state.UserList,
);


export const selectAllUserList = createSelector(
        getUserListFeatureState,
        userListAdapter.getSelectors().selectAll,
);





