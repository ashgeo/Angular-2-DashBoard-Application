import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthCheck implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {  
  }

  canActivate() {      
    if (this.authService.isLoggedin) { return true; }
    this.router.navigate(['login']);
    return false;
  }
}