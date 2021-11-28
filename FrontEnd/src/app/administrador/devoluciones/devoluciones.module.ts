import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevolucionesRoutingModule } from './devoluciones-routing.module';
import { DevolucionesComponent } from './devoluciones.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DevolucionesComponent
  ],
  imports: [
    CommonModule,
    DevolucionesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DevolucionesModule { }
