import { createAction, props } from '@ngrx/store';
export const loadListSuccess = createAction('[Tag] Load List Success', props<{ list: any[]}>());
export const patchItem = createAction('[Tag] Patch List Item', props<{ listItem: any }>());
