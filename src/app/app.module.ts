import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxArkamiArabicConverterModule } from 'ngx-arkami-arabic-converter';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxArkamiArabicConverterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
