import { Injectable } from '@angular/core';
import { Loader } from './loader';

function nameFromUrl(url: string) {
  return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
}

interface ApiMap {
  [name: string]: Loader;
}

let apiMapDictionary: ApiMap = {};

@Injectable({
  providedIn: 'root'
})
export class LoadManagerService {
  get apiMap() {
    return apiMapDictionary;
  }
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

  cleanup() {
    apiMapDictionary = {};
  }
}
