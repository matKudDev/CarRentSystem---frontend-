import { Component, OnInit } from '@angular/core';
import { User,Employee,Rent,AppUser,UserInfo } from '../../model/index';
import { UserService } from '../../services/index';
import { NavbarService,AdminNavbarService,RentService } from '../../services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'pending.component.html',
    styleUrls:['pending.css']
})


export class PendingComponent implements OnInit {
    currentUser: Employee;
    rents: Rent[];
    display: boolean = false;
    selectedRent: Rent;
    model: any = {};
    userInfo: UserInfo;
    pesel:string;
    idCard:string;
    driveLicense:string;

    constructor(private rentService:  RentService,private adminNav:AdminNavbarService,private userService:UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.adminNav.show();
      this.selectedRent = new Rent();
    



    }


    ngOnInit() {
      this.getAllPendingRents();
    }


    getAllPendingRents(){
      this.rentService.getAllPendingRents(this.currentUser.branch).subscribe(rents => { this.rents = rents });
    }

   changeToLoaned(rent:Rent){
     console.log("sdasdasd");
     this.rentService.changeToLoaned(rent).subscribe(()=> {  this.getAllPendingRents()} );

   }

   showDialog(rent:Rent) {
    this.selectedRent = rent;
     this.display = true;
 }

   confirmDialog(){
     this.changeToLoaned(this.selectedRent)

   }


accept(){
  let appUser:AppUser;
  appUser = this.selectedRent.appUser;
  appUser.pesel = this.pesel;
  appUser.idCard = this.idCard;
  appUser.driveLicense = this.driveLicense;
  this.userService.update(appUser).subscribe(data=> {  console.log(data)} );;
  this.confirmDialog();
  this.display= false;
}





    }
