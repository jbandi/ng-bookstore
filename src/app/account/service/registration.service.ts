import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {IRegistration, ICustomer} from "../../core/model/customer";

const REGISTRATION_URL = 'http://localhost:8080/bookstore/rest/customers';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }

  sendRegistration(registration: IRegistration) {
    return this.http.post(REGISTRATION_URL, registration)
  }

  updateCustomer(customer: ICustomer) {
    return this.http.put(`${REGISTRATION_URL}/${customer.number}`, customer)
  }
}
