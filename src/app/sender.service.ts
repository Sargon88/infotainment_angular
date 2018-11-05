import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { socketmessage } from './classes/socketMessage';


@Injectable({
  providedIn: 'root'
})
export class SenderService {

  messages: Subject<any>;

  constructor(private wsService: WebsocketService){ }

  connect(): Subject<any> {
    this.messages =  <Subject<any>>this.wsService
    .connect()
    .pipe(map((response: any): any => {
      return response;
    }));


    return this.messages;
  }

  sendMsg(event, msg) {
    console.log("sendMsg: " + event + " - " + msg);
    var socketMsg = new socketmessage(event, msg);
    console.log("SOCKETMSG: " + JSON.stringify(socketMsg));
    this.messages.next(socketMsg);
  }


}
