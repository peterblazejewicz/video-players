import { TestBed } from '@angular/core/testing';

import { LoadManagerService } from './load-manager.service';

describe('LoadManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadManagerService = TestBed.get(LoadManagerService);
    expect(service).toBeTruthy();
  });

  it('when created the apiMap has been initialized', () => {
    const service: LoadManagerService = TestBed.get(LoadManagerService);
    expect(service.apiMap).toBeTruthy();
  });

  it('when created the apiMap has no values', () => {
    const service: LoadManagerService = TestBed.get(LoadManagerService);
    expect(service.apiMap).toEqual({});
  });
});
