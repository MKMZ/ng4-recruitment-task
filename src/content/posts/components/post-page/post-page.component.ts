import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableComponent } from 'shared/table/components/table.component';
import { Post } from 'content/posts/post';
import { PostRepository } from 'content/posts/post.repository';
import * as fromRoot from 'shared/common/meta.reducer';
import { Store } from '@ngrx/store';
import * as metaReducer from 'shared/common/meta.reducer';
import { Observable } from 'rxjs/Observable';
import { TableColumn } from 'shared/table/table-column';
import { TableDataSource } from 'shared/table/table-data-source';
import { MdSort, MdPaginator } from '@angular/material';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent extends TableComponent<Post> implements OnInit {

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdPaginator) paginator: MdPaginator;

  ngOnInit(): void {
    console.log("post page comp");
    console.log(this);
    this.dataSource = new TableDataSource<Post>(
      this.store.select(metaReducer.postsData),
      this.paginator,
      this.sort
    );
    this.displayColumns = [
      new TableColumn('id', 'ID'),
      new TableColumn('Title', 'title'),
      new TableColumn('Body', 'body')
    ];
    this.columnKeys = this.displayColumns.map(item => item.key);
  }

  constructor(private store: Store<fromRoot.AppState>, private postRepository: PostRepository) {
    super();
  }

}
