import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoRoutingModule } from './nuevo-routing.module';
import { NuevoComponent } from './nuevo.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NuevoComponent
  ],
  imports: [
    CommonModule,
    NuevoRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NuevoModule { }
