import { LoadManager } from './load-manager';

describe('LoadManager', () => {
  let loadManager: LoadManager;

  beforeEach(() => {
    loadManager = new LoadManager();
  });

  it('when created the apiMap has been initialized', () => {
    expect(loadManager.apiMap).toBeTruthy();
  });

  it('when created the apiMap has no values', () => {
    expect(loadManager.apiMap).toEqual({});
  });
});
