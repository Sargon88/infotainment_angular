import { Component, OnInit, Input } from '@angular/core';
import { faPhone, faMapMarkerAlt, faCompactDisc, faCar } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

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



  constructor() { }

  ngOnInit() {

  }

}
