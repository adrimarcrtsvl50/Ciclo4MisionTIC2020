import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomecliRoutingModule } from './homecli-routing.module';
import { HomecliComponent } from './homecli.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomecliComponent
  ],
  imports: [
    CommonModule,
    HomecliRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class HomecliModule { }
