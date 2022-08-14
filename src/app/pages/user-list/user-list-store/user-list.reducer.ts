import * as userLisAction from './user-list.actions';
import {
  createReducer,
  on,
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

interface UserListState extends EntityState<any> { }

const userListAdapter: EntityAdapter<any> = createEntityAdapter<any>();
const defaultUserListState: UserListState = {
  ids: [],
  entities: {},
};

const initialState = userListAdapter.getInitialState(defaultUserListState);

const userReducerList = createReducer(
  initialState,
  on(userLisAction.loadListSuccess, (state, props) => {
    return userListAdapter.upsertMany(props.list, {
      ...state,
    });
  }),
   
  on(userLisAction.patchItem, (state, props) => {
    return userListAdapter.upsertOne(props.listItem, {
        ...state,
        });
    }),
 
);

function UserListReducer(action, state) {
  return userReducerList(action, state);
}

export {
  UserListState,
  defaultUserListState,
  UserListReducer,
  userListAdapter,
};
