import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from 'src/content/posts/post';
import { Comment } from 'src/content/comments/comment';
import { User } from 'src/content/users/user';
import { Album } from 'src/content/albums/album';
import { Photo } from 'src/content/photos/photo';


@Injectable()
export abstract class FakeRepository {
  protected rootUrl = 'http://jsonplaceholder.typicode.com';
  constructor (protected http: Http) {}
}
