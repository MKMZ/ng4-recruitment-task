import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from 'shared/common/meta.reducer';
import * as menu from 'menu/common/menu.actions';
import { getMenuState } from 'menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMenuOpen$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.isMenuOpen$ = store.select(getMenuState);
  }

  handleOpenMenu() {
    this.store.dispatch(new menu.OpenMenuAction());
  }

  handleCloseMenu() {
    this.store.dispatch(new menu.CloseMenuAction());
  }

}
