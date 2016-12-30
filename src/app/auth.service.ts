import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

const LOGIN_KEY = "LOGIN_KEY";

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http, private router: Router){}


  login(email: string, password: string): Observable<boolean> {

    const authUrl = `http://localhost:8080/bookstore/rest/customers?email=${email}&password=${password}`;

    return this.http.head(authUrl)
      .map(r => {
        if (r.status === 204){
          this.storeLogin({email, password});
          return true;
        }
        else {
          this.logout();
          return false
        }
      });
  }

  logout(): any {
    sessionStorage.removeItem(LOGIN_KEY);
    this.router.navigateByUrl('/');
  }

  getLogin(): any {
    return JSON.parse(sessionStorage.getItem(LOGIN_KEY));
  }

  isLoggedIn(): boolean {
    return this.getLogin() !== null;
  }

  storeLogin(login): void{
    sessionStorage.setItem(LOGIN_KEY, JSON.stringify(login));
  }

}
