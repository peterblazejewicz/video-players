import { Loader } from './loader';

describe('Loader', () => {
  it('should create an instance', () => {
    expect(new Loader('loader', 'url', 'callbackName')).toBeTruthy();
  });
});
