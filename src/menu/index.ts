import { createSelector } from 'reselect';

import * as fromMenu from 'menu/common/menu.reducer';
import { getMenuState } from 'shared/common/meta.reducer';


export const isMenuOpen = createSelector(getMenuState, fromMenu.isMenuOpen);

