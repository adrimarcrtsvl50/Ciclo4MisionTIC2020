import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./administrador/home/home.module').then(m => m.HomeModule) }, 
  
  { path: 'devoluciones', loadChildren: () => import('./administrador/devoluciones/devoluciones.module').then(m => m.DevolucionesModule) },
  { path: 'nuevo', loadChildren: () => import('./administrador/inventarios/nuevo/nuevo.module').then(m => m.NuevoModule) },
  { path: 'consultar', loadChildren: () => import('./administrador/inventarios/consultar/consultar.module').then(m => m.ConsultarModule) },
  { path: 'editar/:x', loadChildren: () => import('./administrador/devoluciones/editar/editar.module').then(m => m.EditarModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
