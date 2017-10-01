import {Action} from '@ngrx/store';


export const ContentActionTypes = {
    START_WAITING: '[Content] Start Waiting',
    STOP_WAITING: '[Content] Stop Waiting',
    LOAD_POSTS: '[Content] Load Posts',
    LOADED_POSTS: '[Content] Loaded Posts'
};

export class StartWaitingAction implements ActionPayload {
    type = ContentActionTypes.START_WAITING;
    constructor(public payload: Object) {
    }
}

export class StopWaitingAction implements ActionPayload {
    type = ContentActionTypes.STOP_WAITING;
    constructor(public payload: Object) {
    }
}

export class LoadPostsAction implements ActionPayload {
    type = ContentActionTypes.START_WAITING;
    constructor(public payload: Object) {
    }
}

export class LoadedPostsAction implements ActionPayload {
    type = ContentActionTypes.LOADED_POSTS;
    constructor(public payload: Object) {
    }
}

export interface ActionPayload extends Action {
    payload: object | null;
}

export type ContentActions =
    LoadPostsAction |
    StartWaitingAction |
    StopWaitingAction |
    LoadedPostsAction;
