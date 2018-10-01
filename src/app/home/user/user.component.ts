import { Component, OnInit } from '@angular/core';
import { UserDetails,User } from '../../model/index';
import { UserService } from '../../services/index';
import { NavbarService} from '../../services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})


export class UserComponent implements OnInit {
    currentUser: User;
    userDetails: UserDetails;


    constructor(private userService: UserService,private nav:NavbarService) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.getUserById(this.currentUser.id);

    }


    ngOnInit() {
  this.nav.show();

    }

    getUserById(id: number) {
        console.log('pobranie usera z id: '+ id)
        this.userService.getById(id).subscribe(userDetails => { this.userDetails = userDetails });
    }

    updateUser() {
      console.log('Update'+this.userDetails.lastname);
    
    }

}
