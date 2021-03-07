import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarMenuItemComponent } from "./components/sidebar-menu-item/sidebar-menu-item.component";
import { WcxAppSidebarComponent } from "./wcx-app-sidebar.component";


@NgModule({
  declarations: [WcxAppSidebarComponent, SidebarMenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [WcxAppSidebarComponent, SidebarMenuItemComponent]
})
export class WcxAppSidebarModule {}
