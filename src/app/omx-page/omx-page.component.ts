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

  constructor(private service: PageService) { }

  ngOnInit() {
    this.service.page.subscribe(msg => {
      if(msg.event == ""){
        var data = JSON.parse(msg.data);   
      }
    });

    this.service.sendSocketMessage("", "");
  }



  loadOmxPage(): void {
    if(this.path.length > 0){

        //this.service.sendSocketMessage("explore directory", self.stringPath());

    } else {
        this.service.sendSocketMessage("load omx", "");

        this.service.page.subscribe(msg =>{
          if(msg.event == "loaded omx page"){

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

}
