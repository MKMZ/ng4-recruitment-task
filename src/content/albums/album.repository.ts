import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from 'content/albums/album';
import { FakeRepository } from 'shared/fake.repository';

@Injectable()
export class AlbumRepository extends FakeRepository {

  getAlbums(): Observable<Album[]> {
    const reqUrl = `{this.rootUrl}/users`;
    return this.http.get(reqUrl, {})
      .map(res => res.json().results.map(item => {
        return new Album(item);
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Posts')
      );
  }
}
