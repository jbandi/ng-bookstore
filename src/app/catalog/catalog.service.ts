import {Injectable} from '@angular/core';
import {URLSearchParams} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {BookstoreHttpClientService} from "../core/service/bookstore-http-client.service";

const BOOKS_API = 'books/search';

@Injectable()
export class CatalogService {

  constructor(private http: BookstoreHttpClientService) {}

  search(term: string) {

    const params = new URLSearchParams();
    params.set('keywords', term);

    return this.http.get(BOOKS_API, { search: params })
      .map(res => res.json());
  }

}
