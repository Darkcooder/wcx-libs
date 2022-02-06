import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LgCardComponent } from "./lg-card/lg-card.component";
import { SmCardComponent } from "./sm-card/sm-card.component";
import { CardLogoDirective } from './directives/card-logo.directive';
import { CardTitleDirective } from './directives/card-title.directive';
import { CardDescriptionDirective } from './directives/card-description.directive';
import { CardOptionsDirective } from './directives/card-options.directive';
import { CardContentDirective } from './directives/card-content.directive';
import {TuiAvatarModule, TuiIslandModule, TuiMarkerIconModule} from "@taiga-ui/kit";
import {TuiScrollbarModule} from "@taiga-ui/core";



@NgModule({
  declarations: [
    LgCardComponent,
    SmCardComponent,
    CardLogoDirective,
    CardTitleDirective,
    CardDescriptionDirective,
    CardOptionsDirective,
    CardContentDirective
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    TuiScrollbarModule,
  ],
  exports: [
    LgCardComponent,
    SmCardComponent,
    CardLogoDirective,
    CardTitleDirective,
    CardDescriptionDirective,
    CardOptionsDirective,
    CardContentDirective
  ]
})
export class EntityModule { }
