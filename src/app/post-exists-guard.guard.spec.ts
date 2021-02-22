import { TestBed } from '@angular/core/testing';

import { PostExistsGuardGuard } from './post-exists-guard.guard';

describe('PostExistsGuardGuard', () => {
  let guard: PostExistsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostExistsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
