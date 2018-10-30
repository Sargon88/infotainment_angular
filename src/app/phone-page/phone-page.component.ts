import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { starredContact } from '../classes/starredContact';
import { lastCall } from '../classes/lastCalls';
import { faAngleDoubleLeft, faAngleDoubleRight, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';
//import {  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-phone-page',
  templateUrl: './phone-page.component.html',
  styleUrls: ['./phone-page.component.css']
})
export class PhonePageComponent implements OnInit {

  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faPhoneSlash = faPhoneSlash;

  page = "home";
  lastCalls: lastCall[];
  starredcontacts: starredContact[];

  //debug
  lat: string;
  long: string;
  lastUpdate: Date;

  constructor(private service: PageService ) { }

  ngOnInit() {
    this.service.page.subscribe(msg => {
      if(msg.event == "phone"){
        var phoneObj = JSON.parse(msg.data);
        this.lastCalls = phoneObj.lastcalls;
        this.starredcontacts = phoneObj.starredcontacts;

        //debug
        this.lat = phoneObj.latitude;
        this.long = phoneObj.longitude;
        this.lastUpdate = new Date();
      }
      
    });

    this.service.sendSocketMessage("getStatus", "");
  }

}

