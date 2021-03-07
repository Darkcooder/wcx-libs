import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcxAppHeaderComponent } from './wcx-app-header.component';



@NgModule({
  declarations: [WcxAppHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [WcxAppHeaderComponent]
})
export class WcxAppHeaderModule { }
