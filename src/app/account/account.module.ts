import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./account.routing";
import {AccountComponent} from './components/account.component';

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountModule {}
