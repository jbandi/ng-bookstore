import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {ICustomer} from "./model/customer";
import {CustomerService} from "./customer-service";

@Injectable()
export class CustomerResolve implements Resolve<ICustomer> {

  constructor(private customerService: CustomerService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log('Resolving Customer');
    return this.customerService.getLoginCustomer();
  }
}
