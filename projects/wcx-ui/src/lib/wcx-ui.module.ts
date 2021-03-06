import { NgModule } from "@angular/core";
import { EntityModule } from "./entity/entity.module";
import { WcxAppHeaderModule } from "./structural/wcx-app-header/wcx-app-header.module";
import { WcxAppSidebarModule } from "./structural/wcx-app-sidebar/wcx-app-sidebar.module";
import { WcxAppWrapperModule } from "./structural/wcx-app-wrapper/wcx-app-wrapper.module";
import { WcxListPageModule } from "./structural/wcx-list-page/wcx-list-page.module";
import { WcxPageHeaderModule } from "./structural/wcx-page-header/wcx-page-header.module";


@NgModule({
  imports: [
    WcxAppHeaderModule,
    WcxAppSidebarModule,
    WcxAppWrapperModule,
    WcxListPageModule,
    WcxPageHeaderModule,
    EntityModule,
  ],
  exports: [
    WcxAppHeaderModule,
    WcxAppSidebarModule,
    WcxAppWrapperModule,
    WcxListPageModule,
    WcxPageHeaderModule,
    EntityModule,
  ]
})
export class WcxUiModule { }
