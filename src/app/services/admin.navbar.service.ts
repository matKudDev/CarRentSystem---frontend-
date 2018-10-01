import { Injectable } from '@angular/core';
import { User } from '../model/index';
@Injectable()
export class AdminNavbarService {
  adminVisible: boolean;


  constructor() { this.adminVisible = false
  }

  hide() { this.adminVisible = false; }

  show() { this.adminVisible = true; }




}
