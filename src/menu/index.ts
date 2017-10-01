import { createSelector } from 'reselect';
import {storeLogger} from 'ngrx-store-logger';
import {compose} from '@ngrx/core';
import {combineReducers} from '@ngrx/store';

import * as fromMenu from 'menu/common/menu.reducer';

export interface AppState {
    menu: fromMenu.State;
}

export const reducers = {
    menu: fromMenu.reducer
}

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getMenuState = (state: AppState) => state.menu;

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

export const isMenuOpen = createSelector(getMenuState, fromMenu.isMenuOpen);