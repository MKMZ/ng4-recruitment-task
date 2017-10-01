import * as fromMenu from 'menu/common/menu.reducer';
import * as fromContent from 'content/common/content.reducer';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

export interface AppState {
    menu: fromMenu.State;
    content: fromContent.State;
}

export const reducers = {
    menu: fromMenu.reducer,
    content: fromContent.reducer
};

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);
