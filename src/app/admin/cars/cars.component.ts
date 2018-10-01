import { Component, OnInit } from '@angular/core';
import { User,Car,Employee} from '../../model/index';
import {AdminNavbarService,CarService } from '../../services/index';
import { AlertService, UserService } from '../../services/index';
import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule,Message} from 'primeng/primeng';
@Component({
    moduleId: module.id,
    templateUrl: 'cars.component.html',
    styleUrls: ['cars.component.css'],
    providers: [MessageService]
})


export class CarsComponent implements OnInit {
    currentUser: Employee;
    car: Car;
    branchCars: Car[];
    msgs: Message[] = [];
    carImage:string;


    constructor(private alertService:AlertService,private carService: CarService,private adminNav:AdminNavbarService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.adminNav.show();
      this.car = new Car();
      this.carImage = "https://www.truckmaxusa.com/images/Default.jpg";
    }


    ngOnInit() {
      this.loadAllCars();
    }


    private loadAllCars(){
      this.carService.getAvailableCars(this.currentUser.branch).subscribe(data=>{this.branchCars=data})

    }

    private delete(car){
    this.carService.delete(car.id).subscribe(() => { this.loadAllCars() });
    }

    private create() {
      this.car.branch = this.currentUser.branch;
      this.car.photo = this.carImage;
      this.carService.create(this.car).subscribe(
              data => {
                  this.loadAllCars();
                  this.showSuccess();
              },
              error => {
                  this.alertService.error(error);
              });
                this.loadAllCars();
    }

    showSuccess() {
       this.msgs = [];
       this.msgs.push({severity:'success', summary:'Success Message', detail:'Samochod dodany'});
   }
}
