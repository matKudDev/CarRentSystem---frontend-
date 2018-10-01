import { Routes, RouterModule } from '@angular/router';

import { HomeComponent,UserComponent,HistoryComponent} from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {AdminComponent,CarsComponent,UsersComponent,RentsComponent,PendingComponent} from './admin/index'
import { AuthGuard } from './guards/index';
import { RoleGuard } from './guards/roleIndex';




const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'details', component: HistoryComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [RoleGuard] },
    { path: 'admin/cars', component: CarsComponent, canActivate: [RoleGuard] },
    { path: 'admin/loaned', component: RentsComponent, canActivate: [RoleGuard] },
    { path: 'admin/pending', component: PendingComponent, canActivate: [RoleGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin/users', component: UsersComponent,canActivate: [RoleGuard]  },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },


];

export const routing = RouterModule.forRoot(appRoutes);
