import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { GoogleApisModule } from '@blazejewicz/google-apis';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), GoogleApisModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
