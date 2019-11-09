import { TestBed } from '@angular/core/testing';

import { FabService } from './fab.service';

describe('FabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabService = TestBed.get(FabService);
    expect(service).toBeTruthy();
  });
});
