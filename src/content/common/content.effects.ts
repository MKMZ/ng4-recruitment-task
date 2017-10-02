import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import * as content from 'content/common/content.actions';
import * as router from '@ngrx/router-store';
import { PostRepository } from 'content/posts/post.repository';
import { RoutePaths } from 'shared/common/route-paths';
import { UserRepository } from 'content/users/user.repository';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ContentEffects {

  constructor(
      private notificationsService: NotificationsService,
      private actions$: Actions,
      private postRepository: PostRepository,
      private userRepository: UserRepository
    ) {}

  @Effect()
  routerChange: Observable<Action> = this.actions$
    .ofType(router.ROUTER_NAVIGATION)
    .map(toPayload)
    .switchMap(payload => {
        switch (payload.routerState.url) {
            case '/' + RoutePaths.POSTS: {
                return Observable.of(new content.LoadPostsAction({}));
            }
            case '/' + RoutePaths.USERS: {
                return Observable.of(new content.LoadUsersAction({}));
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
            .map(res => new content.LoadedPostsAction(res))
            .catch((error) => {
                this.notificationsService.error('Error during the process of getting Posts');
                return Observable.of(new content.StopWaitingAction({}));
            });
    });

    @Effect()
    loadUsers$: Observable<Action> = this.actions$
      .ofType(content.ContentActionTypes.LOAD_USERS)
      .map(toPayload)
      .switchMap(payload => {
          return this.userRepository.getUsers()
            .map(res => new content.LoadedUsersAction(res))
            .catch((error) => {
                this.notificationsService.error('Error during the process of getting Users');
                return Observable.of(new content.StopWaitingAction({}));
            });
      });


}
