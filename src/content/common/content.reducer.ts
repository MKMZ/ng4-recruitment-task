import * as content from './content.actions';
import { Post } from 'content/posts/post';

export interface ContentState {
    awaitingSize: number;
    posts: Post[];
}

export function reducer(state = initialState, action: content.ContentActions): ContentState {
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
        case content.ContentActionTypes.LOAD_POSTS: {
            return Object.assign({}, state, {
                awaitingSize: state.awaitingSize + 1
            });
        }
        case content.ContentActionTypes.LOADED_POSTS: {
            return Object.assign({}, state, {
                posts: action.payload,
                awaitingSize: state.awaitingSize - 1
            });
        }
        default:
            return state;
    }
}

const initialState: ContentState = {
    awaitingSize: 0,
    posts: null
};

export const isAwaitingContent = (state: ContentState) => state.awaitingSize > 0;
export const postsData = (state: ContentState) => state.posts;
