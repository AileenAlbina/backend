import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NemosComponent } from './nemos/nemos.component';
import { PriceComponent } from './price/price.component';
import { GraphicComponent } from './graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    NemosComponent,
    PriceComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
