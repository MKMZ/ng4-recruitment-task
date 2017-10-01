import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from 'content/comments/comment';
import { Post } from 'content/posts/post';
import { FakeRepository } from 'shared/fake.repository';

@Injectable()
export class CommentRepository extends FakeRepository {

  getCommentsByPost(post: Post): Observable<Comment[]> {
    const reqUrl = `{this.rootUrl}/posts/{post.id}/comments`;
    return this.http.get(reqUrl, {})
    .map(res => res.json().results.map(item => {
      return new Comment(item);
    }))
    .catch(error => Observable.throw(
      error.json().error || `Error during the process of getting Comments by Post {postId}`)
    );
  }

  getComments(): Observable<Comment[]> {
    const reqUrl = `{this.rootUrl}/comments`;
    return this.http.get(reqUrl, {})
      .map(res => res.json().results.map(item => {
        return new Comment(item);
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Posts')
      );
  }
}
