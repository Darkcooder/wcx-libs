import { TestBed } from '@angular/core/testing';

import { IntentGuideStateService } from './intent-guide-state.service';

describe('IntentGuideStateService', () => {
  let service: IntentGuideStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntentGuideStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
