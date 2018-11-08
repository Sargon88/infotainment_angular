import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { youtubeUrl } from '../classes/youtubeUrl';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.css']
})
export class YoutubePageComponent implements OnInit {

  page = "youtube";
  urls: youtubeUrl[];

  faSpinner = faSpinner;

  constructor(private service: PageService) { }

  ngOnInit() {
    this. urls = [];
    this.service.page.subscribe(msg => {
      if(msg.event == "url history"){
        var data = JSON.parse(msg.data);   
        this.urls = data.urls as youtubeUrl[];
        
      }
      
    });

    this.service.sendSocketMessage("youtube history", "");
  }

  playYoutubeVideo(url: string): void{
    this.service.sendSocketMessage('open yt video', url);
  }

}
