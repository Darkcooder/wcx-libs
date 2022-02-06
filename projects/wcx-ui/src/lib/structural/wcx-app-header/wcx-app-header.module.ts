import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcxAppHeaderComponent } from './wcx-app-header.component';
import {TuiAvatarModule} from "@taiga-ui/kit";



@NgModule({
  declarations: [WcxAppHeaderComponent],
  imports: [
    CommonModule,
    TuiAvatarModule
  ],
  exports: [WcxAppHeaderComponent]
})
export class WcxAppHeaderModule { }
