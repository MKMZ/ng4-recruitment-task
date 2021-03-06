import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from 'content/users/user';
import { FakeRepository } from 'shared/fake.repository';

@Injectable()
export class UserRepository extends FakeRepository {

  getUsers(): Observable<User[]> {
    const reqUrl = `${this.rootUrl}/users`;
    return this.http.get(reqUrl, {})
      .map(res => res.json().map(item => {
        return new User(item);
      }))
      .catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Users')
      );
  }
}
