import { Component } from '@angular/core';
import { NavbarService } from '../services/index';
import { User } from '../model/index';

@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.css']
})

export class NavbarComponent {

  constructor( public nav: NavbarService) {
      }



}
