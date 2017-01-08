import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {IRegistration, ICustomer} from "../../core/model/customer";
import {BookstoreHttpClientService} from "../../core/service/bookstore-http-client.service";

const API_URL = 'orders';

@Injectable()
export class OrderService {

  constructor(private bookstoreHttp: BookstoreHttpClientService) { }

  getOrdersForCustomer(customerNr: number, year: number){

    const params = new URLSearchParams();
    params.set('customerNr', customerNr.toString());
    params.set('year', year.toString());

    return this.bookstoreHttp.get(API_URL + '/search', { search: params })
      .map(res => res.json())
  }
}
