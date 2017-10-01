import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Photo } from 'content/photos/photo';
import { Album } from 'content/albums/album';
import { FakeRepository } from 'shared/fake.repository';

@Injectable()
export class PhotoRepository extends FakeRepository {

  getPhotos(): Observable<Photo[]> {
    const reqUrl = `{this.rootUrl}/users`;
    return this.http.get(reqUrl, {})
      .map(res => res.json().results.map(item => {
        return new Photo(item);
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Posts')
      );
  }

  getPhotosByAlbum(album: Album): Observable<Photo[]> {
    const reqUrl = `{this.rootUrl}/albums/{album.id}/photos`;
    return this.http.get(reqUrl, {})
    .map(res => res.json().results.map(item => {
      return new Album(item);
    }))
    .catch(error => Observable.throw(
      error.json().error || 'Error during the process of getting Posts')
    );
  }
}
