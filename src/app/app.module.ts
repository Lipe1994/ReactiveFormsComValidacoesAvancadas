import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgBrazil,TextMask } from 'ng-brazil' 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
