import {Injectable} from '@angular/core';
import {URLSearchParams} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {BookstoreHttpClientService} from "../bookstore-http-client.service";

const BOOKS_API = 'books';

@Injectable()
export class CatalogService {

  constructor(private http: BookstoreHttpClientService) {}

  search(term: string) {

    const params = new URLSearchParams();
    params.set('keywords', term); // the user's search value

    return this.http.get(BOOKS_API, { search: params })
      .map(res => res.json());
  }

}
