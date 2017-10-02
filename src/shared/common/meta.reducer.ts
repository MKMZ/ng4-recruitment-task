import * as fromMenu from 'menu/common/menu.reducer';
import * as fromContent from 'content/common/content.reducer';
import * as fromRouterStore from '@ngrx/router-store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

export interface AppState {
    menu: fromMenu.MenuState;
    content: fromContent.ContentState;
    router: fromRouterStore.RouterReducerState;
}

export const reducers = {
    menu: fromMenu.reducer,
    content: fromContent.reducer,
    router: fromRouterStore.routerReducer
};

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

export const getMenuState = (state: AppState) => state.menu;

export const isMenuOpen = createSelector(getMenuState, fromMenu.isMenuOpen);



export const getContentState = (state: AppState) => state.content;

export const isAwaitingContent = createSelector(getContentState, fromContent.isAwaitingContent);
export const postsData = createSelector(getContentState, fromContent.postsData);
