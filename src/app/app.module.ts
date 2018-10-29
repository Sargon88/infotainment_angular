import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { PhonePageComponent } from './phone-page/phone-page.component';
import { ButtonsmenuComponent } from './buttonsmenu/buttonsmenu.component';
import { YoutubePageComponent } from './youtube-page/youtube-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    PhonePageComponent,
    ButtonsmenuComponent,
    YoutubePageComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
