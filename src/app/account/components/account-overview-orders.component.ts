import {Component, OnInit, Input} from '@angular/core';
import {OrderService} from "../service/order.service";

@Component({
  selector: 'bs-account-overview-orders',
  templateUrl: './account-overview-orders.component.html',
})
export class AccountOverviewOrdersComponent implements OnInit{

  @Input() customerNr;
  year: number = new Date().getFullYear();
  orders: any[];

  constructor(private orderService : OrderService){}

  ngOnInit(): void {
    this.loadOrders();
  }

  yearChanged(year: number){
    this.year = year;
    this.loadOrders();
  }

  loadOrders(){
    this.orderService.getOrdersForCustomer(this.customerNr, this.year)
      .subscribe(
        res => this.orders = res.sort((a,b) => a.date < b.date )
      )
  }
}

