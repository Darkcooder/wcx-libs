import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcxUiModule } from "wcx-ui";

import { MetodicsRoutingModule } from './metodics-routing.module';
import { MetodicListComponent } from './metodic-list/metodic-list.component';


@NgModule({
  declarations: [MetodicListComponent],
  imports: [
    CommonModule,
    MetodicsRoutingModule,
    WcxUiModule
  ]
})
export class MetodicsModule { }
