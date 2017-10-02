import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from 'content/posts/post';
import { FakeRepository } from 'shared/fake.repository';

@Injectable()
export class PostRepository extends FakeRepository {


  getPosts(): Observable<Post[]> {
    const reqUrl = `${this.rootUrl}/posts`;
    return this.http.get(reqUrl, {})
      .map(res => res.json().map(item => {
        return new Post(item);
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Posts')
      );
  }
}
