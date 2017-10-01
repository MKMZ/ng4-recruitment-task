import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from 'content/posts/post';

@Injectable()
export class PostRepository {
  private rootUrl = 'http://jsonplaceholder.typicode.com';
  constructor (private http: Http) {}

  getPosts(): Observable<Post[]> {
    const reqUrl = `{this.rootUrl}/posts`;
    return this.http.get(reqUrl, {})
      .map(res => res.json().results.map(item => {
        return new Post(item);
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Posts')
      );
  }
}
