import {Action} from '@ngrx/store';


export const ContentActionTypes = {
    START_WAITING: '[Content] Start Waiting',
    STOP_WAITING: '[Content] Stop Waiting'
};

export class StartWaitingAction implements Action {
    type = ContentActionTypes.START_WAITING;
}

export class StopWaitingAction implements Action {
    type = ContentActionTypes.STOP_WAITING;
}


export type ContentActions =
    StartWaitingAction |
    StopWaitingAction;
