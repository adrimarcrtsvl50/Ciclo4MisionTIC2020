import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactanosRoutingModule } from './contactanos-routing.module';
import { ContactanosComponent } from './contactanos.component';


@NgModule({
  declarations: [
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    ContactanosRoutingModule
  ]
})
export class ContactanosModule { }
