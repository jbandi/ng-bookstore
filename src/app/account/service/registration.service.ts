import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {IRegistration, ICustomer} from "../../core/model/customer";
import {BookstoreHttpClientService} from "../../core/service/bookstore-http-client.service";

const REGISTRATION_URL = 'http://localhost:8080/bookstore/rest/customers';

@Injectable()
export class RegistrationService {

  constructor(private http: Http, private bookstoreHttp: BookstoreHttpClientService) { }

  sendRegistration(registration: IRegistration) {
    return this.http.post(REGISTRATION_URL, registration)
  }

  updateCustomer(customer: ICustomer) {
    return this.bookstoreHttp.put(`customers/${customer.number}`, customer)
  }
}
