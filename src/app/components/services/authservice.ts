import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthService {
    isLoggedin: boolean;
     error='';

    constructor(public http: Http) {
       
    }
    login(usercredentials:any) {
        this.isLoggedin = false;
        var headers = new Headers();
        var credentials = 'grant_type='+'password'+ '&username=' + usercredentials.username + '&password=' + usercredentials.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return new Promise((resolve) => {

            this.http.post('http://localhost:60776/token', credentials, headers).subscribe((data) => {                
                if (data.status==200) 
                {
                    window.localStorage.setItem("auth_key", data.json().access_token);
                    window.localStorage.setItem("expire_in", data.json().expires_in);
                    this.isLoggedin = true;
                    resolve(this.isLoggedin)
                }
                else 
                {
                    return data;
                }

            })
          return false;
        })
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('auth_key');
        localStorage.removeItem('expire_in');
    }


}