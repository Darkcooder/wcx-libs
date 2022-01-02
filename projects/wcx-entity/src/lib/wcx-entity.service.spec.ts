import { TestBed } from '@angular/core/testing';

import { WcxEntityService } from './wcx-entity.service';

describe('WcxEntityService', () => {
  let service: WcxEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcxEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
