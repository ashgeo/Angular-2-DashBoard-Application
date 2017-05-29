import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import{ProfileComponent} from './components/profile/profile.component';
import{LoginComponent} from './components/login/login.component';
import{DashBoardComponent} from './components/dashboard/dashboard.component';

const appRoutes :Routes=[
{
    path:'',
    component:HomeComponent
},
{
    path:'profile',
    component:ProfileComponent    
},
{
    path:'login',
    component:LoginComponent
},
{   path: 'dashboard', 
    component:DashBoardComponent
},
// otherwise redirect to home
{   path: '**', 
    redirectTo: 'login' 
}

];
export const appRoutingProviders:any[]=[];
export const routing :ModuleWithProviders= RouterModule.forRoot(appRoutes);