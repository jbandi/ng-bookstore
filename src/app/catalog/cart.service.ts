import { Injectable } from '@angular/core';
import {Book} from "./book";

@Injectable()
export class CartService {

  private positions: Book[] = [];

  constructor() { }

  addPosition(book: Book){
    this.positions.push(book);
  }

  getPositions() {
    return this.positions;
  }
}
