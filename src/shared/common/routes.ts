import { Routes } from '@angular/router';
import { PostPageComponent } from 'content/posts/components/post-page/post-page.component';
import { HomeComponent } from 'content/home/home.component';
import { PageNotFoundComponent } from 'content/errors/page-not-found/page-not-found.component';
import { UserPageComponent } from 'content/users/user-page/user-page.component';
import { RoutePaths } from 'shared/common/route-paths';

export const routes: Routes = [
    { path: RoutePaths.POSTS, component: PostPageComponent },
    {
      path: RoutePaths.HOME,
      component: HomeComponent,
      data: { title: 'Home Page' }
    },
    { path: '',
      redirectTo: RoutePaths.HOME,
      pathMatch: 'full'
    },
    { path: RoutePaths.USERS, component: UserPageComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
