import { createSelector } from '@ngrx/store';
import { UserInfoState } from './user.reducer';
import * as fromRoot from '../../app-state';

const getUserFeatureState = createSelector(
    fromRoot.getUserStateSelector, (state: fromRoot.UserState) => state?.UserInfo,
);


const selectUserInfo = createSelector(
    getUserFeatureState,
    (state: UserInfoState) => state,
);

export {
    selectUserInfo,
};
