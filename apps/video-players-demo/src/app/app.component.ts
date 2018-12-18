import { Component } from '@angular/core';

@Component({
  selector: 'blazejewicz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-players-demo';

  public libraryLoaded(loaded: boolean) {
    console.log(`Library loaded: ${loaded}`);
  }
}
