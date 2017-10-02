import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'shared/table/components/table.component';
import { Post } from 'content/posts/post';
import { PostRepository } from 'content/posts/post.repository';
import * as fromRoot from 'shared/common/meta.reducer';
import { Store } from '@ngrx/store';
import * as metaReducer from 'shared/common/meta.reducer';
import { Observable } from 'rxjs/Observable';
import { TableColumn } from 'shared/table/table-column';
import { TableDataSource } from 'shared/table/table-data-source';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent extends TableComponent<Post> {

  constructor(private store: Store<fromRoot.AppState>, private postRepository: PostRepository) {
    super();
    this.dataSource = new TableDataSource<Post>(
      store.select(metaReducer.postsData),
      this.paginator,
      this.sort
    );
    // this.displayColumns = [
    //   new TableColumn('id', 'id'),
    //   new TableColumn('Title', 'title'),
    //   new TableColumn('Body', 'body')
    // ];
    this.displayColumns = [
      'id',
      'title',
      'body'
    ];
  }

}
