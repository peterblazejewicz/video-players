import { Loader } from './loader';

const defaultCallbackName = 'myCallback';
const defaultUrl = 'https://apis.google.com/js/plusone.js?onload=myCallback';

const scriptSelector = 'script[jsonp-library]';

declare global {
  interface Window {
    myCallback: () => {};
  }
}

describe('Loader', () => {
  beforeEach(() => {});

  afterEach(() => {
    delete window[defaultCallbackName];
    const scriptTag = document.querySelector(scriptSelector);
    scriptTag && scriptTag.parentElement.removeChild(scriptTag);
  });

  it('should create an instance', () => {
    expect(new Loader('loader', 'url', 'callbackName')).toBeTruthy();
  });

  it('should set a property on the window that has the same name as callback name', () => {
    const loader = new Loader('my-loader', defaultUrl, defaultCallbackName);
    expect(window[defaultCallbackName]).toBeDefined();
  });

  it('should set a property on the window of the function type', () => {
    const loader = new Loader('my-loader', defaultUrl, defaultCallbackName);
    expect(typeof window[defaultCallbackName]).toEqual('function');
  });

  it('should create script tag with custom attribute', () => {
    const loader = new Loader('my-loader', defaultUrl, defaultCallbackName);
    const scriptTag: HTMLElement = document.querySelector(scriptSelector);
    expect(scriptTag).not.toBeFalsy();
  });

  it('should create script tag with src set to provided url', () => {
    const loader = new Loader('my-loader', defaultUrl, defaultCallbackName);
    const scriptTag: HTMLScriptElement = document.querySelector(scriptSelector);
    const src = scriptTag.src;
    expect(src).toEqual(defaultUrl);
  });

  it('should call default callback when script loads', done => {
    const loader = new Loader('my-loader', defaultUrl, defaultCallbackName);
    spyOn(window, defaultCallbackName).and.callFake(() => {
      expect(window[defaultCallbackName]).toBeDefined();
      done();
    });
  });

  it('should call default callback when scripts load', done => {
    const loader = new Loader('my-loader', defaultUrl, defaultCallbackName);
    const spy = spyOn(window, defaultCallbackName).and.callFake(() => {
      expect(spy).toHaveBeenCalled();
      done();
    });
  });
});
