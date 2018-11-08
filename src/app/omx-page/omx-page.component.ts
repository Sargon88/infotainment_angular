import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { fileModel } from '../classes/fileModel';
import { playlistModel } from '../classes/playlistModel';

@Component({
  selector: 'app-omx-page',
  templateUrl: './omx-page.component.html',
  styleUrls: ['./omx-page.component.css']
})
export class OmxPageComponent implements OnInit {

  page = "omx";
  path: string[];
  drives: fileModel[];
  message: string;
  selectedPlaylist: playlistModel;
  playlistsList: playlistModel[];

  constructor(private service: PageService) { }

  ngOnInit() {
    this.playlistsList = [];
    this.path = [];
    this.drives = [];

    this.service.page.subscribe(msg => {
      if(msg.event == "loaded playlist dir"){
        this.loadedPlaylistAction(msg.data);
      }
    });

    this.loadOmxPage();
  }


  loadedPlaylistAction(msg: string): void{
    var listArray = JSON.parse(msg);

    for(var i = 0; i < listArray.length; i++){
      var ar = listArray[i];

      var plm = new playlistModel(ar);
      this.playlistsList.push(plm);
    }

    this.selectedPlaylist = this.playlistsList[0];

  }


  loadOmxPage(): void {

      console.log("loadOmxPage:" + this.path.length);
    if(this.path.length > 0){

        this.service.sendSocketMessage("explore directory", this.stringPath(this.path));

    } else {
        this.service.sendSocketMessage("load omx", "");

        this.service.page.subscribe(msg =>{
          if(msg.event == "loaded omx page"){
            console.log("loaded omx page");
            var driveArray: string[];
            var data = msg.data
            if(data != ""){
              driveArray = JSON.parse(data);

              this.drives = this.loadDrive(driveArray);
              this.message="";

            } else {
                this.drives = [];
                this.message = "Nessuna periferica connessa";
            }

            console.log(JSON.stringify(this.drives));
          }
        })
        
    }
  }

  loadDrive(driveArray: string[]): fileModel[]{

    var tempDrives: fileModel[];

    for(var i=0; i < driveArray.length; i++){
      var drive = driveArray[i];

      var d = new fileModel(drive, this.selectedPlaylist);
      tempDrives.push(d);

    }

    return tempDrives;

  }

  stringPath(p: string[]): string{
    var path = p.join();
    path = path.replace(/[, ]+/g, "").trim();

    return path;
  }

}
