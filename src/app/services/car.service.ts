import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Car,Branch } from '../model/index';

@Injectable()
export class CarService {
    constructor(private http: HttpClient) { }


    create(car: Car) {
        return this.http.post(appConfig.apiUrl + '/cars', car);
    }

    getAvailableCars(branch:Branch){
      return this.http.get<Car[]>(appConfig.apiUrl + '/cars/' + branch.id)
    }

    delete(id: number) {
        return this.http.delete(appConfig.apiUrl + '/cars/' + id);
    }
}
