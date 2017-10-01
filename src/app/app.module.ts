import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducer} from 'shared/common/meta.reducer';
import { HomeComponent } from 'content/home/home.component';
import { PostPageComponent } from 'content/posts/components/post-page/post-page.component';
import { routes } from 'shared/common/routes';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'content/errors/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    StoreModule.forRoot({ reducer: metaReducer }),
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
