export class Loader {
  private callbackMacro = '%%callback%%';
  private _error: Error;
  private loaded = false;
  private notifiers: Function[] = [];
  private result: any;
  private script: HTMLElement;

  /**
   * @public
   * @readonly
   * @type {Error}
   * @memberof Loader
   */
  get error(): Error {
    return this._error;
  }

  /**
   *Creates an instance of Loader.
   * @param {string} name
   * @param {string} url
   * @param {(string | undefined)} callbackName
   * @memberof Loader
   */
  constructor(
    name: string,
    private url: string,
    private callbackName: string | undefined
  ) {
    // callback is specified either as callback name
    // or computed dynamically if url has callbackMacro in it
    if (!callbackName) {
      if (url && url.toLowerCase().includes(this.callbackMacro)) {
        callbackName = name + '_loaded';
        url = url.replace(this.callbackMacro, callbackName);
      } else {
        this._error = new Error(
          'JsonpLibrary a %%callback%% parameter is required in libraryUrl'
        );
        // fallback to listening to script.load
        return;
      }
    }
    this.callbackName = callbackName;
    this.url = url;
    window[this.callbackName] = this.success.bind(this);
    this.addScript(url);
  }

  /**
   * @param {Function} notifyCallback
   * @memberof Loader
   */
  public requestNotify(notifyCallback: (error: Error, result: any) => void) {
    if (this.loaded || this.error) {
      notifyCallback(this.error, this.result);
    } else {
      this.notifiers.push(notifyCallback);
    }
  }
  private addScript(url: string) {
    const script: HTMLScriptElement = document.createElement('script');
    script.src = url;
    script.onerror = this.handleError.bind(this);
    script.setAttribute('jsonp-library', '');
    const scriptTag: HTMLElement =
      document.querySelector('script') || document.body;
    scriptTag.parentNode.insertBefore(script, scriptTag);
    this.script = script;
  }

  private cleanup() {
    delete window[this.callbackName];
  }

  private handleError(_event: any) {
    this._error = new Error('Library failed to load');
    this.notifyAll();
    this.cleanup();
  }

  private notifyAll() {
    this.notifiers.forEach(notifyCallback => {
      notifyCallback(this.error, this.result);
    }, this);
    this.notifiers = [];
  }
  private removeScript() {
    if (this.script.parentNode) {
      this.script.parentNode.removeChild(this.script);
    }
    this.script = null;
  }

  private success() {
    this.loaded = true;
    this.result = Array.prototype.slice.call(arguments);
    this.notifyAll();
    this.cleanup();
  }
}
