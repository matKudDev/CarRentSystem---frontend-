import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { RoleGuard } from './guards/roleIndex';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './helpers/index';
import { AlertService, AuthenticationService, UserService,NavbarService,AdminNavbarService,SearchService } from './services/index';
import { CarService,RentService } from './services/index';
import { HomeComponent,UserComponent,HistoryComponent} from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AdminComponent,UsersComponent,CarsComponent,RentsComponent,PendingComponent } from './admin/index'
import { NavbarComponent } from './navbar/index'
import { AdminNavbarComponent } from './adminnavbar/index'
import {DropdownModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {DataListModule} from 'primeng/datalist';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/primeng';
import {MatStepperModule} from '@angular/material/stepper';
import {DialogModule} from 'primeng/dialog';
import {GMapModule} from 'primeng/gmap';




@NgModule({


    imports: [
        MatStepperModule,
        TableModule,
        AccordionModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        DropdownModule,
        BrowserAnimationsModule,
        CalendarModule,
        CardModule,
        StepsModule,
        DataListModule,
        MessageModule,
        GrowlModule,
        DialogModule,
        GMapModule



    ],
    declarations: [
      AppComponent,
      AlertComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      AdminComponent,
      NavbarComponent,
      AdminNavbarComponent,
      UsersComponent,
      UserComponent,
      CarsComponent,
      PendingComponent,
      HistoryComponent,
      RentsComponent,


    ],
    providers: [
       AuthGuard,
       RoleGuard,
       AlertService,
       AuthenticationService,
       UserService,
       RentService,
       SearchService,
       NavbarService,
       CarService,
       AdminNavbarService,
       JwtInterceptorProvider,
       ErrorInterceptorProvider
    ],
    bootstrap: [AppComponent],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})

export class AppModule { }
