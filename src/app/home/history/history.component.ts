import { Component, OnInit } from '@angular/core';
import { User,Rent } from '../../model/index';
import { UserService } from '../../services/index';
import { NavbarService,RentService } from '../../services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'history.component.html',
    styleUrls:['history.css']
})


export class HistoryComponent implements OnInit {
    currentUser: User;
    rents: Rent[];
    status: string;



    constructor(private rentService:  RentService,private nav:NavbarService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.nav.show();

    }


    ngOnInit() {
      this.getUserRentsHistory();
    }


    getUserRentsHistory(){
      this.rentService.getUserRentsHistory(this.currentUser.id).subscribe(rents => { this.rents = rents });

    }




    }
