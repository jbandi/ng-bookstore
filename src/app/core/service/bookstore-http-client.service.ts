import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Http, Headers, RequestOptionsArgs} from "@angular/http";

const BASE_URL = 'http://localhost:8080/bookstore/rest/';

@Injectable()
export class BookstoreHttpClientService {

  constructor(private http: Http){}

  get(url: string, options: RequestOptionsArgs = {}) {

    this.addAuthorizationHeader(options);

    return this.http.get(BASE_URL + url, options);
  }

  post(url:string, payload: any, options: RequestOptionsArgs = {}){

    this.addAuthorizationHeader(options);

    options.headers.append('Content-Type', 'application/json');

    return this.http.post(BASE_URL + url, payload, options)
  }

  put(url:string, payload: any, options: RequestOptionsArgs = {}){

    this.addAuthorizationHeader(options);

    options.headers.append('Content-Type', 'application/json');

    return this.http.put(BASE_URL + url, payload, options)
  }

  addAuthorizationHeader(options: RequestOptionsArgs) {

    if (!options.headers) options.headers = new Headers();

    // TODO: use real creadentials
    options.headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }

}
