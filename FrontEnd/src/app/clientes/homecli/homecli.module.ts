import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomecliRoutingModule } from './homecli-routing.module';
import { HomecliComponent } from './homecli.component';


@NgModule({
  declarations: [
    HomecliComponent
  ],
  imports: [
    CommonModule,
    HomecliRoutingModule
  ]
})
export class HomecliModule { }
