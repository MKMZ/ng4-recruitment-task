import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from 'shared/common/meta.reducer';
import { HomeComponent } from 'content/home/home.component';
import { PostPageComponent } from 'content/posts/components/post-page/post-page.component';
import { routes } from 'shared/common/routes';
import { PageNotFoundComponent } from 'content/errors/page-not-found/page-not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { ContentEffects } from 'content/common/content.effects';
import { PostRepository } from 'content/posts/post.repository';
import { Http, HttpModule } from '@angular/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { UserPageComponent } from 'content/users/user-page/user-page.component';
import { UserRepository } from 'content/users/user.repository';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostPageComponent,
    PageNotFoundComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([
      ContentEffects
    ])
  ],
  providers: [
    PostRepository,
    UserRepository
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
