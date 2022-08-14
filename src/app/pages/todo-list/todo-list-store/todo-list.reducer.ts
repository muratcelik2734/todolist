import * as todoAction from './todo-list.actions';
import {
  createReducer,
  on,
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

interface TodoState extends EntityState<any> { }

const todoAdapter: EntityAdapter<any> = createEntityAdapter<any>();
const defaultTodoState: TodoState = {
  ids: [],
  entities: {},
};

const initialState = todoAdapter.getInitialState(defaultTodoState);

const todoReducer = createReducer(
  initialState,
  on(todoAction.loadListSuccess, (state, props) => {
    return todoAdapter.upsertMany(props.list, {
      ...state,
    });
  }),
   
  on(todoAction.addItem, (state, props) => {
    return todoAdapter.upsertOne(props.listItem, {
        ...state,
        });
    }),
  on(todoAction.deleteItem, (state, props) => {
    return { ...state,  ...todoAdapter.removeOne(props.id, state) };


  }),
);

function TodoReducer(action, state) {
  return todoReducer(action, state);
}

export {
  TodoState,
  defaultTodoState,
  TodoReducer,
  todoAdapter,
};
