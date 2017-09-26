import { TestBed, inject } from '@angular/core/testing';

import { AlbumRepository } from './album.repository';

describe('AlbumRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumRepository]
    });
  });

  it('should be created', inject([AlbumRepository], (service: AlbumRepository) => {
    expect(service).toBeTruthy();
  }));
});
