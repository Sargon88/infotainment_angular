import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonePageComponent } from './phone-page/phone-page.component';
import { YoutubePageComponent } from './youtube-page/youtube-page.component';
import { YoutubeplayPageComponent } from './youtubeplay-page/youtubeplay-page.component';
import { OmxPageComponent } from './omx-page/omx-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'interface', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PhonePageComponent},
  {path: 'youtube', component: YoutubePageComponent},
  {path: 'youtubeplay', component: YoutubeplayPageComponent},
  {path: 'omx', component: OmxPageComponent},
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
