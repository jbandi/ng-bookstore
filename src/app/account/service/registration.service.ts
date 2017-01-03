import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

const REGISTRATION_URL = 'http://localhost:8080/bookstore/rest/customers';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }

  sendOrder(registration) {
    return this.http.post(REGISTRATION_URL, registration)
  }
}
