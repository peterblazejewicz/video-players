import { Loader } from './loader';

export class LoadManager {
  readonly apiMap: { [name: string]: Loader } = {};

  /**
   * @static
   * @param {string} url
   * @param {(error: Error, result: any) => void} notifyCallback loaded callback fn(result)

   * @param {string} [jsonpCallbackName] name of jsonpcallback. If API does not provide it, leave empty
   * @memberof LoadManager
   */
  require(
    url: string,
    notifyCallback: (error: Error, result: any) => void,
    jsonpCallbackName?: string
  ) {
    const name = this.nameFromUrl(url);
    if (!this.apiMap[name]) {
      this.apiMap[name] = new Loader(name, url, jsonpCallbackName);
    }

    this.apiMap[name].requestNotify(notifyCallback);
  }

  private nameFromUrl(url: string) {
    return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
  }
}
