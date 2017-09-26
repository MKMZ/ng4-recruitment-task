import { TestBed, inject } from '@angular/core/testing';

import { FakeRepositoryService } from './fake-repository.service';

describe('FakeRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeRepositoryService]
    });
  });

  it('should be created', inject([FakeRepositoryService], (service: FakeRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
