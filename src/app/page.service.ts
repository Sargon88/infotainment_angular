import { Injectable } from '@angular/core';
import { SenderService } from './sender.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  page: Subject<any>;

  constructor(private sender: SenderService) { 
    this.page = <Subject<any>>sender.connect();
  }

  sendSocketMessage(event: string, message: string){
    this.sender.sendMsg(event, message);

  }
}
