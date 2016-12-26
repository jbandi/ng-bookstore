import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

const API_URL_SEARCH = 'http://localhost:8080/bookstore/rest/books';

@Injectable()
export class CatalogService {

  constructor(private http: Http) {
  }

  search(term: string) {

    const params = new URLSearchParams();
    params.set('keywords', term); // the user's search value

    return this.http.get(API_URL_SEARCH, { search: params })
      .map(res => res.json());
  }

}
