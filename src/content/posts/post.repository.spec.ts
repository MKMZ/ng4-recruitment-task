import { TestBed, inject } from '@angular/core/testing';

import { PostRepository } from './post.repository';

describe('PostRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostRepository]
    });
  });

  it('should be created', inject([PostRepository], (service: PostRepository) => {
    expect(service).toBeTruthy();
  }));
});
