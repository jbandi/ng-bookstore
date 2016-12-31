import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {RegistrationService} from "../service/registration.service";

@Component({
  template: `
<h2>Registration</h2>
<form novalidate  [formGroup]="customerForm" (ngSubmit)="onSubmit()">

<div formGroupName="customer">



<label>
  <span>Email:</span>
  <input type="text" formControlName="email">
</label>
First Name: <input type="text" formControlName="firstName">
Last Name: <input type="text" formControlName="lastName">


<div formGroupName="address">

Street: <input type="text" formControlName="street">
City: <input type="text" formControlName="city">
Postal Code: <input type="text" formControlName="postalCode">
Country: <input type="text" formControlName="country">

</div>

<div formGroupName="creditCard">

Type: <input type="text" formControlName="type">
Number: <input type="text" formControlName="number">
Expiration Month: <input type="number" formControlName="expirationMonth">
Country: <input type="number" formControlName="expirationYear">

</div>

</div>

Password: <input type="password" formControlName="password">

<button type="submit" class="btn btn-default">Submit</button>

</form>
`
})
export class RegistrationComponent implements OnInit {

  private customerForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customer: this.fb.group({
        email: ['', [Validators.required, Validators.minLength(2)]],
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        address: this.fb.group({
          street: [''],
          city: [''],
          postalCode: [''],
          country: [''],
        }),
        creditCard: this.fb.group({
          type: [''],
          number: [''],
          expirationMonth: [''],
          expirationYear: [''],
        }),
      }),
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    console.log(this.customerForm);
    this.registrationService.sendOrder(this.customerForm.value)
      .subscribe();
  }

}
