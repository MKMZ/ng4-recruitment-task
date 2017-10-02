import { Action } from '@ngrx/store';
import { TableState } from 'shared/table/table-state';


export const ContentActionTypes = {
    START_WAITING: '[Content] Start Waiting',
    STOP_WAITING: '[Content] Stop Waiting',
    LOAD_POSTS: '[Content] Load Posts',
    LOADED_POSTS: '[Content] Loaded Posts',
    CHANGE_POST_TAB: '[Content] Change Post Table',
    LOAD_USERS: '[Content] Load Users',
    LOADED_USERS: '[Content] Loaded Users',
    CHANGE_USER_TAB: '[Content] Change User Table'
};

export class StartWaitingAction implements Action {
    type = ContentActionTypes.START_WAITING;
    constructor(public payload: Object) {
    }
}

export class StopWaitingAction implements Action {
    type = ContentActionTypes.STOP_WAITING;
    constructor(public payload: Object) {
    }
}

export class LoadPostsAction implements Action {
    type = ContentActionTypes.LOAD_POSTS;
    constructor(public payload: Object) {
    }
}

export class LoadedPostsAction implements Action {
    type = ContentActionTypes.LOADED_POSTS;
    constructor(public payload: Object) {
    }
}

export class ChangePostTable implements Action {
    type = ContentActionTypes.CHANGE_POST_TAB;
    constructor(public payload: TableState) {
        localStorage.setItem(this.type, payload.pageSize.toString());
    }
}

export class LoadUsersAction implements Action {
    type = ContentActionTypes.LOAD_USERS;
    constructor(public payload: Object) {
    }
}

export class LoadedUsersAction implements Action {
    type = ContentActionTypes.LOADED_USERS;
    constructor(public payload: Object) {
    }
}

export class ChangeUserTable implements Action {
    type = ContentActionTypes.CHANGE_USER_TAB;
    constructor(public payload: TableState) {
        localStorage.setItem(this.type, payload.pageSize.toString());
    }
}

export type ContentActions =
    LoadPostsAction |
    StartWaitingAction |
    StopWaitingAction |
    LoadedPostsAction;
