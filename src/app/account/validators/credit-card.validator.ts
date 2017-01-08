import { FormControl } from '@angular/forms';

export function validateCreditCardExpirationYear(c: FormControl) {

  return c.value >= new Date().getFullYear() ? null : {
    validateCreditCardExpirationYear: {
      valid: false
    }
  };
}

export function validateCreditCardExpirationMonth(c: FormControl) {

  return c.value >= 1 && c.value <= 12 ? null : {
    validateCreditCardExpirationMonth: {
      valid: false
    }
  };
}
