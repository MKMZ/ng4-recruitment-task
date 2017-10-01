import { createSelector } from 'reselect';

import * as fromReducer from 'content/common/content.reducer';
import { AppState } from 'shared/common/meta.reducer';

export const getContentState = (state: AppState) => state.content;

export const isAwaitingContent = createSelector(getContentState, fromReducer.isAwaitingContent);
export const getPostsData = createSelector(getContentState, fromReducer.postsData);

