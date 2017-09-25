import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store"; 
import {metaReducer} from "./common/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    StoreModule.forRoot({ reducer: metaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
