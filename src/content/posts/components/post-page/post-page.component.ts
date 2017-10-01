import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'shared/table/components/table.component';
import { Post } from 'content/posts/post';
import { PostRepository } from 'content/posts/post.repository';
import * as fromRoot from 'shared/common/meta.reducer';
import { Store } from '@ngrx/store';
import { getContentState } from 'content';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent extends TableComponent<Post> {

  public dataContent$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>, private postRepository: PostRepository) {
    super();
    this.dataContent$ = store.select(getContentState);
  }

}
