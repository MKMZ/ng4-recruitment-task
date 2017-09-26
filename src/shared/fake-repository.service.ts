import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from 'src/content/posts/post';


@Injectable()
export class FakeRepositoryService {
  rootUrl = 'http://jsonplaceholder.typicode.com';
  constructor (private http: Http) {}

  getPosts(): Observable<any> {
    const reqUrl: string = this.rootUrl + '/posts';
    return this.http.get(reqUrl, {})
      .map(res => res.json().results.map(item => {
        return new Post(
          item.userId,
          item.id,
          item.title,
          item.body
        );
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Posts')
      );
  }

}
