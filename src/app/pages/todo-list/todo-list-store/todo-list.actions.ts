import { createAction, props } from '@ngrx/store';
export const loadListSuccess = createAction('[Tag] Load List Success', props<{ list: any[]}>());
export const addItem = createAction('[Tag] Add List Item', props<{ listItem: any }>());
export const deleteItem = createAction('[Tag] Delete Item', props<{id:any}>());
