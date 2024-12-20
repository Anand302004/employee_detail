import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';
import { FiveComponent } from './five/five.component';
import { FormsModule } from '@angular/forms';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
import { ElevenComponent } from './eleven/eleven.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    SecondComponent,
    ThirdComponent,
    ForthComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
    NineComponent,
    TenComponent,
    ElevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
