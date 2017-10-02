import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from 'shared/common/meta.reducer';
import * as menu from 'menu/common/menu.actions';
import * as metaReducer from 'shared/common/meta.reducer';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMenuOpen$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>, private _service: NotificationsService) {
    this.isMenuOpen$ = store.select(metaReducer.isMenuOpen);
  }

  handleOpenMenu() {
    this.store.dispatch(new menu.OpenMenuAction());
  }

  handleCloseMenu() {
    this.store.dispatch(new menu.CloseMenuAction());
  }

  goToXSolve() {
    window.location.href = 'https://xsolve.software/';
  }

}
