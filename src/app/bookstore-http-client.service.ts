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

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }

  get(url, options: RequestOptionsArgs = {}) {

    if (!options.headers) options.headers = new Headers();

    this.createAuthorizationHeader(options.headers);

    return this.http.get(BASE_URL + url, options);
  }

}
