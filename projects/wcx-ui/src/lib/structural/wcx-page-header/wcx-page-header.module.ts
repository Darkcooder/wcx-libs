import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcxPageHeaderComponent } from './wcx-page-header.component';



@NgModule({
  declarations: [WcxPageHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [WcxPageHeaderComponent]
})
export class WcxPageHeaderModule { }
