import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
moduleId:module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashBoardComponent  { 
constructor(private router:Router)
{

}

logout()
{
    window.localStorage.removeItem('auth_key');
    this.router.navigate(['login']);
}
 }