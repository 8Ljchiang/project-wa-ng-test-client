import { TestBed } from '@angular/core/testing';

import { AuthenticationFeatureService } from './authentication-feature.service';

describe('AuthenticationFeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationFeatureService = TestBed.get(AuthenticationFeatureService);
    expect(service).toBeTruthy();
  });
});
