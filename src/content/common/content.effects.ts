import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import * as content from 'content/common/content.actions';
import * as router from '@ngrx/router-store';
import { PostRepository } from 'content/posts/post.repository';

@Injectable()
export class ContentEffects {

  constructor(private actions$: Actions, private postRepository: PostRepository) { }

  @Effect()
  routerChange: Observable<Action> = this.actions$
    .ofType(router.ROUTER_NAVIGATION)
    .map(toPayload)
    .switchMap(payload => {
        switch (payload.routerState.url) {
            case '/posts': {
                return Observable.of(new content.LoadPostsAction({}));
            }
            default: {
                return Observable.of({type: ''});
            }
        }
    });


  @Effect()
  loadPosts$: Observable<Action> = this.actions$
    .ofType(content.ContentActionTypes.LOAD_POSTS)
    .map(toPayload)
    .switchMap(payload => {
        return this.postRepository.getPosts()
            .map(res => new content.LoadedPostsAction(res));
    });


}
