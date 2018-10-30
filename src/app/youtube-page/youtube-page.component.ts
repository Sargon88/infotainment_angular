import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.css']
})
export class YoutubePageComponent implements OnInit {

  page = "youtube";
  urls: string[];

  constructor(private service: PageService) { }

  ngOnInit() {
    this. urls = [];
    this.service.page.subscribe(msg => {
      if(msg.event == "url history"){
        console.log(msg);
        var data = JSON.parse(msg.data);        
        
      }
      
    });

    this.service.sendSocketMessage("youtube history", "");
  }

}
