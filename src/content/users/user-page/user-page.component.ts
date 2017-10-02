import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'shared/table/components/table.component';
import { User } from 'content/users/user';
import { TableDataSource } from 'shared/table/table-data-source';
import * as metaReducer from 'shared/common/meta.reducer';
import { TableColumn } from 'shared/table/table-column';
import { Store } from '@ngrx/store';
import * as fromRoot from 'shared/common/meta.reducer';
import * as content from 'content/common/content.actions';
import { UserRepository } from 'content/users/user.repository';
import { Observable } from 'rxjs/Observable';
import { TableState } from 'shared/table/table-state';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent extends TableComponent<User> implements OnInit {

  ngOnInit(): void {
    this.dataSource = new TableDataSource<User>(
      this.store.select(metaReducer.usersData),
      this.paginator,
      this.sort,
      ['name', 'username', 'email', 'phone', 'website']
    );
    this.displayColumns = [
      new TableColumn('Name', 'name'),
      new TableColumn('Username', 'username'),
      new TableColumn('Email', 'email'),
      new TableColumn('Phone', 'phone'),
      new TableColumn('Website', 'website')
    ];
    this.columnKeys = this.displayColumns.map(item => item.key);

    this.tableProps = this.store.select(metaReducer.getUserTable);
    this.bindPaginator();

    this.bindFilter();
  }

  constructor(private store: Store<fromRoot.AppState>, private userRepository: UserRepository) {
    super();
  }

  bindPaginator(): any {
    this.pageSize = +localStorage.getItem(content.ContentActionTypes.CHANGE_USER_TAB);

        this.paginator.page.subscribe(change => this.store.dispatch(
          new content.ChangeUserTable(new TableState(change.pageSize))
        ));
  }

  bindFilter(): any {
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

}
