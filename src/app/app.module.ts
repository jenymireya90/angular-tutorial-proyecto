import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CharacterComponent} from './components/character/character.component';
import {ApiService} from './services/api.service';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent, CharacterComponent],
  bootstrap:    [ AppComponent],
  providers: [ApiService]
})
export class AppModule { }
