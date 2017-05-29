import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing'
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';
import {DashBoardComponent} from './components/dashboard/dashboard.component';
import {AuthService} from './components/services/authservice';
import { AuthCheck } from './components/authcheck/authcheck';
import { AlertService } from './components/services/alert.service';




import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, routing,FormsModule,HttpModule],
  declarations: [ AppComponent, HomeComponent,ProfileComponent,LoginComponent,DashBoardComponent],
  bootstrap:    [ AppComponent ],
  providers: [appRoutingProviders,AuthService,AlertService]
})
export class AppModule { }
