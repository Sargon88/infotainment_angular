import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonePageComponent } from './phone-page/phone-page.component';
import { YoutubePageComponent } from './youtube-page/youtube-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PhonePageComponent},
  {path: 'youtube', component: YoutubePageComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
