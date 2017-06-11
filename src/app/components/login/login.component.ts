import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  returnUrl: '/login';
  localUser = {
    username: '',
    password: ''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
       // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.localUser)
      .subscribe(
      data => {
        //this.router.navigate(['dashboard']);
        this.router.navigate([this.returnUrl]);        
      },
      error => {
        this.alertService.error(error);
        //this.error = error;
        this.loading = false;
      });
  }
  clearfield() {
    this.localUser.username = '';
    this.localUser.password = '';
  }
}
