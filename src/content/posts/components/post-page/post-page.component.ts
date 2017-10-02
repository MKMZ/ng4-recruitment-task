import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableComponent } from 'shared/table/components/table.component';
import { Post } from 'content/posts/post';
import { PostRepository } from 'content/posts/post.repository';
import * as fromRoot from 'shared/common/meta.reducer';
import * as content from 'content/common/content.actions';
import { Store } from '@ngrx/store';
import * as metaReducer from 'shared/common/meta.reducer';
import { Observable } from 'rxjs/Observable';
import { TableColumn } from 'shared/table/table-column';
import { TableDataSource } from 'shared/table/table-data-source';
import { MdSort, MdPaginator } from '@angular/material';
import { TableState } from 'shared/table/table-state';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent extends TableComponent<Post> implements OnInit {

  ngOnInit(): void {
    this.dataSource = new TableDataSource<Post>(
      this.store.select(metaReducer.postsData),
      this.paginator,
      this.sort,
      ['title', 'body']
    );
    this.displayColumns = [
      new TableColumn('ID', 'id'),
      new TableColumn('Title', 'title'),
      new TableColumn('Body', 'body')
    ];
    this.columnKeys = this.displayColumns.map(item => item.key);

    this.tableProps = this.store.select(metaReducer.getPostTable);
    this.bindPaginator();

    this.bindFilter();
  }

  constructor(private store: Store<fromRoot.AppState>, private postRepository: PostRepository) {
    super();
  }

  bindPaginator(): any {
    this.pageSize = +localStorage.getItem(content.ContentActionTypes.CHANGE_POST_TAB);

        this.paginator.page.subscribe(change => this.store.dispatch(
          new content.ChangePostTable(new TableState(change.pageSize))
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
