import { createSelector } from 'reselect';

import * as fromReducer from 'menu/common/menu.reducer';
import { AppState } from 'shared/common/meta.reducer';

export const getMenuState = (state: AppState) => state.menu;

export const isMenuOpen = createSelector(getMenuState, fromReducer.isMenuOpen);


