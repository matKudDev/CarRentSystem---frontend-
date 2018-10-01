import { Component, OnInit } from '@angular/core';
import { NavbarService,AdminNavbarService } from '../services/index';
import { User,Employee } from '../model/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {
    currentUser: Employee;
    users: User[] = [];

    options: any;

    constructor(private userService: UserService,public nav: NavbarService,public adminNav: AdminNavbarService ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.options = {
             center: {lat: 50.87033, lng: 20.62752},
             zoom: 12
         };

    }

    ngOnInit() {
        this.adminNav.show();
        this.nav.hide();

        this.loadAllUsers();
    }

    deleteUser(_id: number) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
