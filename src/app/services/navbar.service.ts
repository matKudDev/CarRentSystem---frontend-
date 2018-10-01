import { Injectable } from '@angular/core';
import { User } from '../model/index';
@Injectable()
export class NavbarService {
  visible: boolean;


  constructor() { this.visible = false
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }





}
