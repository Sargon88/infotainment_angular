import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';
import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';
import { faBatteryHalf } from '@fortawesome/free-solid-svg-icons';
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { statusbar } from '../classes/statusbar';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  faCoffee = faCoffee;
  faBluetoothB = faBluetoothB;
  faWifi = faWifi;
  faBatteryEmpty = faBatteryEmpty;
  faBatteryQuarter = faBatteryQuarter;
  faBatteryHalf = faBatteryHalf;
  faBatteryThreeQuarters = faBatteryThreeQuarters;
  faBatteryFull = faBatteryFull;
  faPowerOff = faPowerOff;

  statusbar: statusbar;

  constructor() { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus(): void{
    this.statusbar = JSON.parse('{"bluetooth":true, "wifi":true, "batteryValue":"100", "hour":"10:30"}');
  }

}
