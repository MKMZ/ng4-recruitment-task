import * as menu from './menu.actions';

export interface MenuState {
    isOpen: boolean;
}

export function reducer(state = initialState, action: menu.MenuActions): MenuState {
    switch (action.type) {
        case menu.MenuActionTypes.OPEN_MENU: {
            return Object.assign({}, state, {
                isOpen: true
            });
        }
        case menu.MenuActionTypes.CLOSE_MENU: {
            return Object.assign({}, state, {
                isOpen: false
            });
        }
        default:
            return state;
    }
}

const initialState: MenuState = {
    isOpen: true
};

export const isMenuOpen = (state: MenuState) => state.isOpen;
