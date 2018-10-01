import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/index';
import { User,Branch,Car,AppUser,Rent } from '../model/index';
import { UserService,SearchService,RentService } from '../services/index';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {GMapModule} from 'primeng/gmap';
declare var google: any;

@Component({
    moduleId: module.id,
    styleUrls: ['home.css'],
    templateUrl: 'home.component.html',

})



export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    cars: Car[];
    carSelected: Car;
    cities: Branch[];
    selectedCity: Branch;
    selectedReturn: Branch;
    carClass:string;
    pickupDate: Date;
    pickupTime :Date;
    returnDate: Date;
    returnTime: Date;
    searchVisible: boolean;
    summaryVisible: boolean;
    carsVisible: boolean;
    types: SelectItem[];
    selectedType:string;
    price:number;
    user:AppUser;
    rent: Rent;
    successVisible:boolean;
    optionsKielce: any;
    optionsKrakow: any;
    optionsWarszawa: any;
    overlays: any[];


    constructor(private userService: UserService,
      public nav: NavbarService ,
      public searchService: SearchService,
      public rentService:RentService,
      private router: Router ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = new AppUser();
        this.rent = new Rent();




    }

    ngOnInit() {
      this.optionsKielce = {
           center: {lat: 50.87033, lng: 20.62752},
           zoom: 8
       };

       this.optionsKrakow = {
            center: {lat: 50.049683, lng:  19.944544},
            zoom: 8
        };

        this.optionsWarszawa = {
             center: {lat: 52.237049, lng: 21.017532},
             zoom: 8
         };

       this.overlays = [
                   new google.maps.Marker({position: {lat: 50.87033, lng: 20.62752}, title:"Kielce"}),
                   new google.maps.Marker({position: {lat: 50.049683, lng: 19.944544}, title:"Kraków"}),
                   new google.maps.Marker({position: {lat: 52.237049, lng: 21.017532}, title:"Warszawa"}),
];
this.userService.getAppUserById(this.currentUser.id).subscribe(user => { this.user = user });

  this.types = [
                  {label:'Osobowe', value:"Osobowe"},
                  {label:'Dostawcze', value:"Dostawcze"}

              ];
      this.searchVisible=true;
      this.successVisible = false;
      this.summaryVisible = false;
      this.carsVisible = false;
      this.getAllCities();
        this.nav.show();


    }




private getAllCities(){
      this.searchService.getAllCities().subscribe(cities => { this.cities = cities; });
}
    search(){
      console.log(this.selectedType);
this.searchVisible = false;
this.searchService.getAvailableCars(this.selectedCity.id,this.selectedType,this.pickupDate,this.returnDate).subscribe(cars=>{this.cars = cars;});
this.carsVisible = true;
    }



private rentCar(car){
  var diff = Math.abs(this.returnDate.getTime() - this.pickupDate.getTime());
  this.price = Math.ceil(diff / (1000 * 3600 * 24)*100);
this.carSelected = car;
this.carsVisible = false;
this.summaryVisible = true;

}

private book(){

console.log(this.user.username,this.user.firstname);
this.rent.appUser = this.user;
this.rent.car = this.carSelected;
this.rent.car.branch = this.selectedReturn;
this.rent.rentDate = this.pickupDate;
this.rent.returnDate = this.returnDate;
this.rent.pickupBranch = this.selectedCity;
this.rent.returnBranch = this.selectedReturn;
this.rent.state = "pending";
this.rent.cost = this.price;


this.rentService.book(this.rent).subscribe(
        data => {
            console.log("sukces");
            this.summaryVisible = false;
            this.successVisible = true;
        },
        error => {
          console.log("nie udalo sie");
        });


}

private previous(){
  console.log("sadasds");
  this.summaryVisible = false;
  this.carsVisible = true;
}





}
