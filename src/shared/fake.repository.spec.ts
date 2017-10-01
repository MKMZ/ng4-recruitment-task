import { TestBed, inject } from '@angular/core/testing';

import { FakeRepository } from './fake.repository';

describe('FakeRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeRepository]
    });
  });

  it('should be created', inject([FakeRepository], (service: FakeRepository) => {
    expect(service).toBeTruthy();
  }));
});
