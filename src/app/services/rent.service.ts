import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Rent,Branch } from '../model/index';

@Injectable()
export class RentService {
    constructor(private http: HttpClient) { }

    book(rent:Rent) {
        return this.http.post(appConfig.apiUrl + '/rent', rent);
    }


  getAllPendingRents(branch:Branch){
    return this.http.get<Rent[]>(appConfig.apiUrl+'/rent/pending/'+branch.id);
  }

  getAllLoanedRents(branch:Branch){
    return this.http.get<Rent[]>(appConfig.apiUrl+'/rent/loaned/'+branch.id);
  }

  getUserRentsHistory(id:number){
    return this.http.get<Rent[]>(appConfig.apiUrl+'/rent/'+id);
  }

  changeToLoaned(rent:Rent){
    return this.http.post(appConfig.apiUrl + '/rent/pending',rent)
  }

  changeToReturned(rent:Rent){
    return this.http.post(appConfig.apiUrl + '/rent/loaned',rent);
  }




}
