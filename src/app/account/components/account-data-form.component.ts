import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {IRegistration} from "../../core/model/customer";
import {validateEmail} from "../validators/email.validator";
import {validateCreditCardExpirationYear, validateCreditCardExpirationMonth} from "../validators/credit-card.validator";

@Component({
  selector: 'bs-account-data-form',
  templateUrl: './account-data-form.component.html'
})
export class RegistrationFormComponent implements OnInit {


  private registrationForm: FormGroup;

  @Input() emailIsReadOnly;
  @Input() hidePassword;
  @Input() initialData: any;
  @Output() onSaveRegistration = new EventEmitter<IRegistration>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      customer: this.fb.group({
        email: ['', [Validators.required, validateEmail]],
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        address: this.fb.group({
          street: ['', [Validators.required, Validators.minLength(2)]],
          city: ['', [Validators.required, Validators.minLength(2)]],
          postalCode: ['', [Validators.required, Validators.minLength(2)]],
          country: ['', [Validators.required, Validators.minLength(2)]],
        }),
        creditCard: this.fb.group({
          type: ['', [Validators.required]],
          number: ['', [Validators.required, Validators.pattern(/\d{16}/)]],
          expirationMonth: ['', [Validators.required, validateCreditCardExpirationMonth]],
          expirationYear: ['', [Validators.required, validateCreditCardExpirationYear]],
        }),
      }),
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

    if (this.initialData){
      this.registrationForm.patchValue({customer: this.initialData});
    }

  }

  onSubmit() {
    this.onSaveRegistration.emit(this.registrationForm.value);
  }

}
