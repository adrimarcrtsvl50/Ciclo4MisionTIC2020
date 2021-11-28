import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecliComponent } from './homecli.component';

const routes: Routes = [{ path: '', component: HomecliComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomecliRoutingModule { }
