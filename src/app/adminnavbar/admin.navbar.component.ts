import { Component ,OnInit } from '@angular/core';
import { AdminNavbarService } from '../services/index';
import { Employee } from '../model/index';

@Component({
  moduleId: module.id,
  selector: 'admin-navbar',
  templateUrl: 'admin.navbar.component.html',
  styleUrls : ['./admin.navbar.css']
})

export class AdminNavbarComponent implements OnInit {
  currentUser: Employee;
  constructor( public nav: AdminNavbarService) {

      }
ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}


}
