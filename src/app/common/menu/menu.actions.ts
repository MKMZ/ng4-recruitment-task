import {Action} from '@ngrx/store';


export const MenuActionTypes = {
    OPEN_MENU: '[Menu] Open Menu',
    CLOSE_MENU: '[Menu] Close Menu'    
};

export class OpenMenuAction implements Action {
    type = MenuActionTypes.OPEN_MENU;
}

export class CloseMenuAction implements Action {
    type = MenuActionTypes.CLOSE_MENU;
}


export type MenuActions = 
    OpenMenuAction |
    CloseMenuAction;
