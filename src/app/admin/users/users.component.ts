import { Component, OnInit } from '@angular/core';
import { User } from '../../model/index';
import { UserService } from '../../services/index';
import { NavbarService,AdminNavbarService } from '../../services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'users.component.html'
})


export class UsersComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    cols: any[];


    constructor(private userService: UserService,private adminNav:AdminNavbarService) {
      this.cols = [
               { field: 'username', header: 'username' },
               {field: 'id', header: 'id' }


           ];
this.adminNav.show();

    }


    ngOnInit() {

        this.loadAllUsers();
    }

    deleteUser(id: number) {
        console.log('usun uzytkownika z id: '+id)
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
