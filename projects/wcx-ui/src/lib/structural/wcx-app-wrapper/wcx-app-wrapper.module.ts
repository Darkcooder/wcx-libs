import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcxAppWrapperComponent } from './wcx-app-wrapper.component';
import { WcxAppContentDirective } from './directives/wcx-app-content.directive';



@NgModule({
  declarations: [WcxAppWrapperComponent, WcxAppContentDirective],
  imports: [
    CommonModule
  ],
  exports: [WcxAppWrapperComponent, WcxAppContentDirective]
})
export class WcxAppWrapperModule { }
