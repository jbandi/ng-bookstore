import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../catalog.service";

@Component({
  selector: 'bs-catalog',
  templateUrl: './catalog.component.html',
  providers: [CatalogService]
})
export class CatalogComponent implements OnInit {

  private results;

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
  }

  search(term: string) {
    this.results = this.catalogService.search(term);
  }

}
