import { Routes } from '@angular/router';
import { PostPageComponent } from 'content/posts/components/post-page/post-page.component';
import { HomeComponent } from 'content/home/home.component';
import { PageNotFoundComponent } from 'content/errors/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'posts', component: PostPageComponent },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Home Page' }
    },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];
