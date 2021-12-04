import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    FormsModule,
    
  ]
})
export class NosotrosModule { }
