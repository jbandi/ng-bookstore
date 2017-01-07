export interface ICustomer {
  number: string,
  firstName: string,
  lastName: string,
  email: string,
  address: IAddress,
  creditCard: ICreditCard
}

export interface IAddress {
  street: string,
  city: string,
  postalCode: string
  country: string
}

export interface ICreditCard {
  type: string,
  number: string,
  expirationMonth: number,
  expirationYear: number
}

export interface IRegistration {
  customer: ICustomer,
  password: string
}
