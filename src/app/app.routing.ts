import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import{ProfileComponent} from './components/profile/profile.component';
import{LoginComponent} from './components/login/login.component';
import{DashBoardComponent} from './components/dashboard/dashboard.component';
import {AuthCheck } from './components/authcheck/authcheck';

const appRoutes :Routes=[
{
    path:'',
    component:DashBoardComponent,
    canActivate: [AuthCheck]
},
{
    path:'profile',
    component:ProfileComponent,
    canActivate: [AuthCheck] 
     
},
{
    path:'login',
    component:LoginComponent,
      
},
{   path: 'dashboard', 
    component:DashBoardComponent,
    canActivate: [AuthCheck]
},
// otherwise redirect to home
{   path: '**', 
    redirectTo: 'login' 
}

];
export const appRoutingProviders:any[]=[];
export const routing :ModuleWithProviders= RouterModule.forRoot(appRoutes);