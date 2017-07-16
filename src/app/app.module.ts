import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';


import { App } from './app';
import { CarouselContainer, CarouselUnit } from './components';
import { Api } from './services';

@NgModule({
  declarations: [
    App,
    CarouselContainer,
    CarouselUnit
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    Api
  ],
  bootstrap: [App]
})
export class AppModule { }
