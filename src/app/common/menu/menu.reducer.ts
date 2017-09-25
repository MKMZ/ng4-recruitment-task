import * as menu from './menu.actions';

export interface State {
    isOpen: boolean
}

export function reducer(state = initialState, action: menu.MenuActions): State {
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

const initialState: State = {
    isOpen: true
}

export const isMenuOpen = (state:State) => state.isOpen;
