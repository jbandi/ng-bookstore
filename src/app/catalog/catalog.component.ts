import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bs-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  private results = [
    {
      title: 'Java for Dummies', price: 42
    },
    {
      title: 'Professional Java', price: 41
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
