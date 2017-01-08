import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {RegistrationService} from "../service/registration.service";
import {IRegistration} from "../../core/model/customer";
import {Router} from "@angular/router";

@Component({
  template: `
<h2>Registration</h2>
<bs-account-data-form (onSaveRegistration)="saveRegistration($event)"></bs-account-data-form>
`
})
export class RegistrationComponent {

  private customerForm: FormGroup;

  constructor(private registrationService: RegistrationService, public router: Router) {}



  onSubmit() {
    // console.log(this.customerForm);
    // this.registrationService.sendOrder(this.customerForm.value)
    //   .subscribe();
  }

  saveRegistration(registration: IRegistration){
    this.registrationService.sendRegistration(registration)
      .subscribe(
        () => this.router.navigate(['/login'])
      );
  }

}
