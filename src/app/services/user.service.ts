import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User,UserDetails,AppUser } from '../model/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/users');
    }

    getById(id: number) {
        return this.http.get<UserDetails>(appConfig.apiUrl + '/users/' + id);
    }

    getAppUserById(id:number){
      return this.http.get<AppUser>(appConfig.apiUrl + '/users/' + id);
    }

    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/users/sign-up', user);
    }

    update(user: AppUser){
        return this.http.post(appConfig.apiUrl + '/users', user);
    }


    delete(id: number) {
        return this.http.delete(appConfig.apiUrl + '/users/' + id);
    }
}
