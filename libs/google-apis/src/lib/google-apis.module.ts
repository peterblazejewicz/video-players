import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleYoutubeApiComponent } from './google-youtube-api/google-youtube-api.component';
import { JsonpLibraryModule } from '@blazejewicz/jsonp-library';

@NgModule({
  imports: [CommonModule, JsonpLibraryModule],
  declarations: [GoogleYoutubeApiComponent],
  exports: [GoogleYoutubeApiComponent]
})
export class GoogleApisModule {}
