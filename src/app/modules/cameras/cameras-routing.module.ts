import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamerasComponent } from './components/cameras/cameras.component';
import { AuthGuard } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: CamerasComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamerasRoutingModule { }
