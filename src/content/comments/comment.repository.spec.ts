import { TestBed, inject } from '@angular/core/testing';

import { CommentRepository } from './comment.repository';

describe('CommentRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentRepository]
    });
  });

  it('should be created', inject([CommentRepository], (service: CommentRepository) => {
    expect(service).toBeTruthy();
  }));
});
