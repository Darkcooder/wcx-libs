import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'metodics',
    loadChildren: () => import('./metodics/metodics.module').then((m) => m.MetodicsModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then((m) => m.PlanModule)
  },
  {
    path: 'execution',
    loadChildren: () => import('./execution/execution.module').then((m) => m.ExecutionModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'metodics'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
