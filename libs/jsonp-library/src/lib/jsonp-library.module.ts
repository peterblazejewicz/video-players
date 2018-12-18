import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpLibraryComponent } from './jsonp-library/jsonp-library.component';

@NgModule({
  imports: [CommonModule],
  declarations: [JsonpLibraryComponent],
  exports: [JsonpLibraryComponent]
})
export class JsonpLibraryModule {}
