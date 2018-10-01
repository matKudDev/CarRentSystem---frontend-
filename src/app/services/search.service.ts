import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Branch,Car } from '../model/index';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) { }

    getAllCities() {
        return this.http.get<Branch[]>(appConfig.apiUrl + '/users/cities');
    }

getAvailableCars(pickupCity:string, carClass:string, pickupDate:Date, returnDate:Date){
  let pickup_date = JSON.stringify(pickupDate);
  let return_date = JSON.stringify(returnDate);
  let params = new HttpParams();
params = params.append('pickupCity', pickupCity);
params = params.append('carClass', carClass);
params = params.append('pickupDate', pickup_date);
params = params.append('returnDate', return_date);
  return this.http.get<Car[]>(appConfig.apiUrl + '/cars/',{params:params})
}


}
