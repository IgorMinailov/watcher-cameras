import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamerasRoutingModule } from './cameras-routing.module';
import { CamerasComponent } from './components/cameras/cameras.component';
import { MaterialModule } from '../../material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { translateLoaderFactory } from '../../app.module';

@NgModule({
  declarations: [CamerasComponent],
  imports: [
    CommonModule,
    CamerasRoutingModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ]
})
export class CamerasModule { }
