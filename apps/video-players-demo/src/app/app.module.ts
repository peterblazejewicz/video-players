import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleApisModule } from '@blazejewicz/google-apis';
import { JsonpLibraryModule } from '@blazejewicz/jsonp-library';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    GoogleApisModule,
    JsonpLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
