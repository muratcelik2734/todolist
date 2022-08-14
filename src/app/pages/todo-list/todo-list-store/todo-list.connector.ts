import { createSelector } from "@ngrx/store";
import * as fromRoot from './../../../app-state';
import { todoAdapter } from "./todo-list.reducer";
const getTodoFeatureState = createSelector(
        fromRoot.getUserStateSelector, (state: fromRoot.UserState) => state.TodoList,
);


export const selectAllTodoList = createSelector(
        getTodoFeatureState,
        todoAdapter.getSelectors().selectAll,
);





