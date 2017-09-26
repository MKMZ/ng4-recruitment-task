import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducer} from 'src/menu/common/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    StoreModule.forRoot({ reducer: metaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
