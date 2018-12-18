import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jsonp-library',
  template: '',
  styles: [
    `
      :host {
        display: none;
      }
    `
  ]
})
export class JsonpLibraryComponent implements OnInit {
  private _libraryUrl: string;

  private ready = false;

  /**
   * Library url. Must contain string `%%callback%%`.
   * `%%callback%%` is a placeholder for jsonp wrapper function name
   * Ex: https://maps.googleapis.com/maps/api/js?callback=%%callback%%
   * @type {string}
   * @memberof JsonpLibraryComponent
   */
  @Input()
  set libraryUrl(libraryUrl: string) {
    this._libraryUrl = libraryUrl;
    if (this.ready && libraryUrl) {
      this.loadLibrary();
    }
  }

  get libraryUrl(): string {
    return this._libraryUrl;
  }

  /**
   * Set if library requires specific callback name.
   * Name will be automatically generated if not set.
   * @type {string}
   * @memberof JsonpLibraryComponent
   */
  @Input()
  callbackName: string;

  /**
   * name of event to be emitted when library loads. Standard is `api-load`
   * @type {string}
   * @memberof JsonpLibraryComponent
   */
  @Input()
  notifyEventName: string;

  /**
   * event with name specified in `notifyEvent` attribute
   * will fire upon successful load
   * @type {EventEmitter<any>}
   * @memberof JsonpLibraryComponent
   */
  @Output()
  notifyEvent: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.ready = true;
    if (this.libraryUrl) {
      this.loadLibrary();
    }
  }

  /**
   * @private
   * @memberof JsonpLibraryComponent
   */
  private loadLibrary() {}
}
