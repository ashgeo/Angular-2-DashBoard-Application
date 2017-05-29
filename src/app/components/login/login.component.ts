
// import { Component } from '@angular/core';
// import { AuthService } from '../services/authservice';
// import { Router, ActivatedRoute } from '@angular/router';

// @Component({
//   moduleId: module.id,
//   selector: 'login',
//   templateUrl: 'login.component.html'
// })

// export class LoginComponent {
//   localUser = {
//     username: '',
//     password: ''
//   }
//    loading = false;
  

//   constructor(private service: AuthService, private router: Router) {

//   }
//   login() {
//     this.service.login(this.localUser).then((res) => {
//       if (res) {
//         this.router.navigate(['dashboard']);
//       }
//       else {
//        this.service.error='Username or password is incorrect';
//       }
//     })
//  this.service.error='Username or password is incorrect';
//   }
//   clearfield()
//   {
//     this.localUser.username='';
//     this.localUser.password='';
//   }


// }



import { AuthService } from '../services/authservice';
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
    returnUrl: string;    
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
    this.authenticationService.login(this.localUser).then((res) => {
      if (res) {
        this.router.navigate(['dashboard']);
      }
      else {
       this.authenticationService.error='Username or password is incorrect';
       this.alertService.error("Error11");
                    this.loading = false;
      }
    })
 this.alertService.error("Error");
                    this.loading = false;
  }
  clearfield()
  {
    this.localUser.username='';
    this.localUser.password='';
  }
}
