import { TestBed } from '@angular/core/testing';

import { LoginserverService } from './loginserver.service';

describe('LoginserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginserverService = TestBed.get(LoginserverService);
    expect(service).toBeTruthy();
  });
});
