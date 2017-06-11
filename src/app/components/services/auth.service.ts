import { Injectable } from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    isLoggedin: boolean;
    public token: string;
    private tokenEndPointUrl='http://localhost:60776/token';
    options: any ;
    error=""; 
    constructor(public http: Http ) {   
} 

  login(usercredentials:any) {
      this.isLoggedin = false;
         var headers = new Headers();
         var credentials = 'grant_type='+'password'+ '&username=' + usercredentials.username + '&password=' + usercredentials.password;
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.tokenEndPointUrl, credentials,headers)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    window.localStorage.setItem('currentUser', JSON.stringify(user));
                    this.isLoggedin=true;
                }
            });
    }
    logout() {     
        localStorage.removeItem('currentUser');    
    }
    isLogedIn()
{
    return this.isLoggedin;
}
}