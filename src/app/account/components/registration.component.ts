import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {RegistrationService} from "../service/registration.service";
import {IRegistration} from "../../core/model/customer";

@Component({
  template: `
<h2>Registration</h2>
<bs-account-data-form (onSaveRegistration)="saveRegistration($event)"></bs-account-data-form>
`
})
export class RegistrationComponent implements OnInit {

  private customerForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
  }

  ngOnInit(): void {
    // this.customerForm = this.fb.group({
    //   customer: this.fb.group({
    //     email: ['', [Validators.required, Validators.minLength(2)]],
    //     firstName: ['', [Validators.required, Validators.minLength(2)]],
    //     lastName: ['', [Validators.required, Validators.minLength(2)]],
    //     address: this.fb.group({
    //       street: [''],
    //       city: [''],
    //       postalCode: [''],
    //       country: [''],
    //     }),
    //     creditCard: this.fb.group({
    //       type: [''],
    //       number: [''],
    //       expirationMonth: [''],
    //       expirationYear: [''],
    //     }),
    //   }),
    //   password: ['', [Validators.required, Validators.minLength(2)]],
    // });
  }

  onSubmit() {
    // console.log(this.customerForm);
    // this.registrationService.sendOrder(this.customerForm.value)
    //   .subscribe();
  }

  saveRegistration(registration: IRegistration){
    this.registrationService.sendRegistration(registration)
      .subscribe();
  }

}
