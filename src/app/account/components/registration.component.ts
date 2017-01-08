import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {RegistrationService} from "../service/registration.service";
import {IRegistration} from "../../core/model/customer";
import {Router} from "@angular/router";

@Component({
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  private customerForm: FormGroup;

  constructor(private registrationService: RegistrationService, public router: Router) {}

  saveRegistration(registration: IRegistration){
    this.registrationService.sendRegistration(registration)
      .subscribe(
        () => this.router.navigate(['/login'])
      );
  }

}
