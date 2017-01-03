import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {RegistrationService} from "../service/registration.service";

@Component({
  selector: 'bs-account-data-form',
  template: `
<form novalidate  [formGroup]="customerForm" (ngSubmit)="onSubmit()">

  <div formGroupName="customer">
  
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" formControlName="email">
    </div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" formControlName="firstName">  
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" formControlName="lastName">
    </div>
  </div>
  
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" formControlName="password">
  </div>
    
  <div formGroupName="customer">
  
  
    <div formGroupName="address">
    
      <div class="form-group">
        <label for="street">Street</label>
        <input type="text" class="form-control" id="street" formControlName="street">
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" formControlName="city">
      </div>
      <div class="form-group">
        <label for="postalCode">Postal Code</label>
        <input type="text" class="form-control" id="postalCode" formControlName="postalCode">
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input type="text" class="form-control" id="country" formControlName="country">
      </div>

    </div>
    
    <div formGroupName="creditCard">
    
      <div class="form-group">
        <label for="type">Credit Card Type</label>
        <input type="text" class="form-control" id="type" formControlName="type">
      </div>    
      <div class="form-group">
        <label for="number">Credit Card Number</label>
        <input type="text" class="form-control" id="number" formControlName="number">
      </div>    
      <div class="form-group">
        <label for="expirationMonth">Credit Card Expiration Month</label>
        <input type="number" class="form-control" id="expirationMonth" formControlName="expirationMonth">
      </div>    
      <div class="form-group">
        <label for="expirationYear">Credit Card Expiration Year</label>
        <input type="number" class="form-control" id="expirationYear" formControlName="expirationYear">
      </div>

    </div>
  
  </div>
  
  <button type="submit" class="btn btn-default">Submit</button>

</form>
`
})
export class AccountDataFormComponent implements OnInit, AfterViewInit {


  private customerForm: FormGroup;

  @Input() initialData: any;

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

  ngAfterViewInit(): void {
    if (this.initialData){
      this.customerForm.patchValue({customer: this.initialData});
    }
  }

  onSubmit() {
    console.log(this.customerForm);
    this.registrationService.sendOrder(this.customerForm.value)
      .subscribe();
  }

}
