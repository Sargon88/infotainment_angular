import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { socketmessage } from './classes/socketMessage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;
  subj: Rx.Subject<MessageEvent>;

  constructor(public router: Router) { }

  connect(): Rx.Subject<MessageEvent> {

    if(this.socket == null){
      this.socket = io(environment.ws_url);

      // We define our observable which will observe any incoming messages
      // from our socket.io server.
      let observable = new Observable(observer => {
          this.socket.on('status', (data) => {
            var msg = new socketmessage("status", data);
            observer.next(msg);
          }).on('set page', (data) => {
            var msg = new socketmessage("set page", data);

            if(data == "ytPlay" || data == '"ytPlay"'){
              this.router.navigate(['youtubeplay']);
            } else if(data == "home" || data == '"home"'){
              this.router.navigate(['home']);
            } else if(data == "yt" || data == '"yt"'){
              this.router.navigate(['youtube']);
            } else if(data == "omx" || data == '"omx"'){
              this.router.navigate(['omx']);
            }
            
            observer.next(msg);

          }).on('phone', (data) => {
            var msg = new socketmessage("phone", data);
            observer.next(msg);
          }).on('url history', (data) => {
            var msg = new socketmessage("url history", data);
            observer.next(msg);
          })
          return () => {
            this.socket.disconnect();
          }
      });
      
      // We define our Observer which will listen to messages
      // from our other components and send messages back to our
      // socket server whenever the `next()` method is called.
      let observer = {
          next: (data: socketmessage) => {
            console.log("EMIT: " + JSON.stringify(data));
              this.socket.emit(data.event, JSON.stringify(data.data));
          },
      };
      // we return our Rx.Subject which is a combination
      // of both an observer and observable.
      this.subj =  Rx.Subject.create(observer, observable);
    }
    

    return this.subj
  }

}