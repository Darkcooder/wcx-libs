import {NgModule} from "@angular/core";
import {EntityModule} from "./entity/entity.module";
import {WcxAppHeaderModule} from "./structural/wcx-app-header/wcx-app-header.module";
import {WcxAppSidebarModule} from "./structural/wcx-app-sidebar/wcx-app-sidebar.module";
import {WcxAppWrapperModule} from "./structural/wcx-app-wrapper/wcx-app-wrapper.module";
import {WcxListPageModule} from "./structural/wcx-list-page/wcx-list-page.module";
import {WcxPageHeaderModule} from "./structural/wcx-page-header/wcx-page-header.module";
import {TuiDialogModule, TuiNotificationsModule, TuiRootModule, TUI_SANITIZER} from "@taiga-ui/core";
import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";


@NgModule({
  imports: [
    WcxAppHeaderModule,
    WcxAppSidebarModule,
    WcxAppWrapperModule,
    WcxListPageModule,
    WcxPageHeaderModule,
    EntityModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule
  ],
  exports: [
    WcxAppHeaderModule,
    WcxAppSidebarModule,
    WcxAppWrapperModule,
    WcxListPageModule,
    WcxPageHeaderModule,
    EntityModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
})
export class WcxUiModule { }
