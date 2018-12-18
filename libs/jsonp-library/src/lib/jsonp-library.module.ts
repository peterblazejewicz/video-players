import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IronJsonpLibraryComponent } from './iron-jsonp-library/iron-jsonp-library.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IronJsonpLibraryComponent],
  exports: [IronJsonpLibraryComponent]
})
export class JsonpLibraryModule {}
