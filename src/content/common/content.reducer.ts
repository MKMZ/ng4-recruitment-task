import * as content from './content.actions';
import { Post } from 'content/posts/post';
import { TableState } from 'shared/table/table-state';
import { User } from 'content/users/user';

export interface ContentState {
    awaitingSize: number;
    posts: Post[];
    postTable: TableState;
    users: User[];
    userTable: TableState;
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
        case content.ContentActionTypes.CHANGE_POST_TAB: {
            return Object.assign({}, state, {
                postTable: action.payload
            });
        }
        case content.ContentActionTypes.LOAD_USERS: {
            return Object.assign({}, state, {
                awaitingSize: state.awaitingSize + 1
            });
        }
        case content.ContentActionTypes.LOADED_USERS: {
            return Object.assign({}, state, {
                users: action.payload,
                awaitingSize: state.awaitingSize - 1
            });
        }
        case content.ContentActionTypes.CHANGE_USER_TAB: {
            return Object.assign({}, state, {
                userTable: action.payload
            });
        }
        default:
            return state;
    }
}

const initialState: ContentState = {
    awaitingSize: 0,
    posts: null,
    postTable: new TableState(
        +localStorage.getItem(content.ContentActionTypes.CHANGE_POST_TAB)
    ),
    users: null,
    userTable: new TableState(
        +localStorage.getItem(content.ContentActionTypes.CHANGE_POST_TAB)
    )
};

export const isAwaitingContent = (state: ContentState) => state.awaitingSize > 0;
export const postsData = (state: ContentState) => state.posts;
export const getPostTable = (state: ContentState) => state.postTable;

export const usersData = (state: ContentState) => state.users;
export const getUserTable = (state: ContentState) => state.userTable;
