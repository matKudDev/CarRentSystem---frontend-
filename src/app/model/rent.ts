import {User,Car,AppUser,Branch } from '../model/index';

export class Rent{
   id: number;
   rentDate: Date;
   returnDate: Date;
   pickupBranch:Branch;
   returnBranch:Branch;
   cost: number;
   state: string;
   appUser: AppUser;
   car:Car;
}
