import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

const LOGIN_KEY = "LOGIN_KEY";

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router){}


  login(user: string, password: string): Observable<boolean> {

    // Here we should do an API call ...

    if (user === 'user' && password === 'password') {
      return Observable.of(true).delay(1000).do(val => this.storeLogin({user, password}));
    }

    return Observable.of(false).delay(1000).do(val => this.logout());
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
