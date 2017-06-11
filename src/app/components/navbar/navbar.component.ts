import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  moduleId:module.id,
  selector: 'ct-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent  { 
 constructor(private authService: AuthService) { }
 isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
     isActive() {      
     return !this.authService.isLogedIn();
  }

 }