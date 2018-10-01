import { Component, OnInit } from '@angular/core';
import { User,Employee,Rent,AppUser } from '../../model/index';
import { UserService } from '../../services/index';
import { NavbarService,AdminNavbarService,RentService } from '../../services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'rents.component.html',
    styleUrls:['rents.css']
})


export class RentsComponent implements OnInit {
    currentUser: Employee;
    rents: Rent[];
    selectedUser:AppUser;
    display:boolean;

    username:string;
    pesel:string;
    idCard:string;
    licenseCard:string ;



    constructor(private rentService:  RentService,private adminNav:AdminNavbarService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.adminNav.show();

    }


    ngOnInit() {
      this.getAllLoanedRents();
      this.username = "username";
      this.pesel = "pesel";
      this.idCard = "id";
      this.licenseCard="licenseCard";
    }


    getAllLoanedRents(){
      this.rentService.getAllLoanedRents(this.currentUser.branch).subscribe(rents => { this.rents = rents });
    }

   changeToReturned(rent:Rent){
     console.log("sdasdasd");
     this.rentService.changeToReturned(rent).subscribe(()=> {  this.getAllLoanedRents()} );

   }

   showDialog(user:AppUser) {
    this.selectedUser = user;
    this.username = user.username;
    this.licenseCard = user.driveLicense;
    this.pesel = user.pesel;
    this.idCard = user.idCard;
     this.display = true;
 }




    }
