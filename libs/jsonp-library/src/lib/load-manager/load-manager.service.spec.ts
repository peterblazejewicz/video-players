import { TestBed } from '@angular/core/testing';

import { LoadManagerService } from './load-manager.service';

const defaultUrl = 'https://apis.google.com/js/plusone.js?onload=%%callback%%';
describe('LoadManagerService', () => {
  let service: LoadManagerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadManagerService]
    });
    service = TestBed.get(LoadManagerService);
  });

  afterEach(() => {
    service.cleanup();
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when created the apiMap has been initialized', () => {
    expect(service.apiMap).toBeTruthy();
  });

  it('when created the apiMap has no values', () => {
    expect(service.apiMap).toEqual({});
  });

  it('when created with correct url it calls the callback with results', done => {
    const notifyCallback = (error: Error, result: any) => {
      expect(error).toBeUndefined();
      expect(result).toBeDefined();
      done();
    };
    service.require(defaultUrl, notifyCallback);
  });

  it('when created with 404 url it calls the callback with an error', done => {
    const notifyCallback = (error: Error, result: any) => {
      expect(error).toBeDefined();
      expect(result).toBeUndefined();
      done();
    };
    service.require('https://example.com/404.js', notifyCallback);
  });
});
