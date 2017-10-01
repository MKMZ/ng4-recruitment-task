import { TestBed, inject } from '@angular/core/testing';

import { PhotoRepository } from './photo.repository';

describe('PhotoRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoRepository]
    });
  });

  it('should be created', inject([PhotoRepository], (service: PhotoRepository) => {
    expect(service).toBeTruthy();
  }));
});
