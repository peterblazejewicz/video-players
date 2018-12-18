import { Injectable } from '@angular/core';
import { Loader } from './loader';

function nameFromUrl(url: string) {
  return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
}

@Injectable({
  providedIn: 'root'
})
export class LoadManagerService {
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
    const name = nameFromUrl(url);
    if (!this.apiMap[name]) {
      this.apiMap[name] = new Loader(name, url, jsonpCallbackName);
    }
    this.apiMap[name].requestNotify(notifyCallback);
  }
}
