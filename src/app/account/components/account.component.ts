import { Component, OnInit } from '@angular/core';
import {ICustomer, IRegistration} from "../../core/model/customer";
import {ActivatedRoute} from "@angular/router";
import {RegistrationService} from "../service/registration.service";

@Component({
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  private customer: ICustomer;

  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) {}

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

  saveRegistration(registration: IRegistration){

    const updatedCustomer = Object.assign(this.customer, registration.customer);

    this.registrationService.updateCustomer(updatedCustomer)
      .subscribe();
  }

}
