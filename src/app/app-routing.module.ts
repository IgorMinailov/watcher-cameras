import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cameras', loadChildren: () => import('./modules/cameras/cameras.module').then(m => m.CamerasModule) },
  { path: 'reporting', loadChildren: () => import('./modules/reporting/reporting.module').then(m => m.ReportingModule) },
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
