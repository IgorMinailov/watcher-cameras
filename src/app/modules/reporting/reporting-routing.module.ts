import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportingComponent } from './components/reporting/reporting.component';
import { AuthGuard } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: ReportingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
