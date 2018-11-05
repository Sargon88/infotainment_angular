import { Component, OnInit, Input } from '@angular/core';
import { faPhone, faMapMarkerAlt, faCompactDisc, faCar } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { PageService } from '../page.service';

@Component({
  selector: 'app-buttonsmenu',
  templateUrl: './buttonsmenu.component.html',
  styleUrls: ['./buttonsmenu.component.css']
})
export class ButtonsmenuComponent implements OnInit {

  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faCompactDisc = faCompactDisc;
  faYoutube = faYoutube;
  faCar = faCar;
  @Input() page: string;



  constructor(private service: PageService) { }

  ngOnInit() {

  }

  changePage(page: string): void{
    this.service.sendSocketMessage('change page', page);
  }

}
