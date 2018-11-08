import { Component, OnInit } from '@angular/core';
import { faWifi, faBatteryEmpty, faBatteryQuarter, faBatteryHalf,faBatteryThreeQuarters,faBatteryFull, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { statusbar } from '../classes/statusbar';
import { SenderService } from '../sender.service';
import { StatusBarService } from '../status-bar.service';



@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  faBluetoothB = faBluetoothB;
  faWifi = faWifi;
  faBatteryEmpty = faBatteryEmpty;
  faBatteryQuarter = faBatteryQuarter;
  faBatteryHalf = faBatteryHalf;
  faBatteryThreeQuarters = faBatteryThreeQuarters;
  faBatteryFull = faBatteryFull;
  faPowerOff = faPowerOff;

  statusbar: statusbar;
  clock: string;

  constructor(private service: StatusBarService, private sender: SenderService ) { }

  ngOnInit() {

    var d = new Date();
    this.clock = d.getHours() + ":" + d.getMinutes();

    this.service.status.subscribe(msg => {
      if(msg.event == "status"){
        this.statusbar = JSON.parse(msg.data);
      }
      
    });

    this.service.sendMsg("getStatus", "");
    this.service.sendMsg("getPage", "");

    setInterval(function() {
      var d = new Date();
      this.clock = d.getHours() + ":" + d.getMinutes();
    }, 1000);
  }

  changeBrightness(): void {
    this.service.sendMsg("brightness", "");
  }

  reboot(): void{
    this.service.sendMsg("reboot", "");
  }

}
