import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { WcxAppWrapperComponent } from './wcx-app-wrapper.component';
import { WcxAppContentDirective } from './directives/wcx-app-content.directive';
import {TuiRootModule} from "@taiga-ui/core";



@NgModule({
  declarations: [WcxAppWrapperComponent, WcxAppContentDirective],
  imports: [
    CommonModule,
    MatSidenavModule,
    TuiRootModule,
    TuiRootModule,
    TuiRootModule,
    TuiRootModule
  ],
  exports: [WcxAppWrapperComponent, WcxAppContentDirective]
})
export class WcxAppWrapperModule { }
