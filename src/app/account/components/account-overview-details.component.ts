import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'bs-account-overview-details',
  templateUrl: './account-overview-details.component.html',
})
export class AccountOverviewDetailsComponent  {

  @Input() customer;

}

