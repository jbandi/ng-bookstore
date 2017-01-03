import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../core/model/customer";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  private customer: ICustomer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = this.route.snapshot.data['customer'];

    // this.customer = {
    //     email: 'test@test.com',
    //     number: '1',
    //     firstName: 'Test',
    //     lastName: 'Test',
    //     address: {
    //       city: 'Test',
    //       postalCode: '1234',
    //       street: 'Test',
    //       country: 'TEST'
    //     },
    //     creditCard: {
    //       type: 'TEST',
    //       number: '12345',
    //       expirationMonth: 12,
    //       expirationYear: 2018
    //     }
    //   }
  }

}
