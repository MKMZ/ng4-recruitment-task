import * as content from './content.actions';

export interface State {
    awaitingSize: number;
}

export function reducer(state = initialState, action: content.ContentActions): State {
    switch (action.type) {
        case content.ContentActionTypes.START_WAITING: {
            return Object.assign({}, state, {
                awaitingSize: state.awaitingSize + 1
            });
        }
        case content.ContentActionTypes.STOP_WAITING: {
            return Object.assign({}, state, {
                awaitingSize: state.awaitingSize - 1
            });
        }
        default:
            return state;
    }
}

const initialState: State = {
    awaitingSize: 0
};

export const isAwaitingContent = (state: State) => state.awaitingSize > 0;
