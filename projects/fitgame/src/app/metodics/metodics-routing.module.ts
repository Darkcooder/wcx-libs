import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodicListComponent } from "./metodic-list/metodic-list.component";

const routes: Routes = [
  {
    path: '',
    component: MetodicListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetodicsRoutingModule { }
