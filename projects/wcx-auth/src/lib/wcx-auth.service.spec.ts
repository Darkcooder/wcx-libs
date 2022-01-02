import { TestBed } from '@angular/core/testing';

import { WcxAuthService } from './wcx-auth.service';

describe('WcxAuthService', () => {
  let service: WcxAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcxAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
