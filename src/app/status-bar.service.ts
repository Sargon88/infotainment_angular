import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SenderService } from './sender.service';

@Injectable({
  providedIn: 'root'
})
export class StatusBarService {

  status: Subject<any>;

  constructor(private sender: SenderService) { 
    this.status = <Subject<any>>sender.connect();
  }

  sendMsg(event, msg){
    this.sender.sendMsg(event, msg);
  } 

}
