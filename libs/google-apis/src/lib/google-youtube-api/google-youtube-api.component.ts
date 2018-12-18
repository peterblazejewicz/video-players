import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'google-youtube-api',
  template: `
    <iron-jsonp-library></iron-jsonp-library>
  `,
  styles: []
})
export class GoogleYoutubeApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
