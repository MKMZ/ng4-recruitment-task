import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from 'content/posts/post';
import { Comment } from 'content/comments/comment';
import { User } from 'content/users/user';
import { Album } from 'content/albums/album';
import { Photo } from 'content/photos/photo';


@Injectable()
export abstract class FakeRepository {
  protected rootUrl = 'http://jsonplaceholder.typicode.com';
  constructor (protected http: Http) {}
}
