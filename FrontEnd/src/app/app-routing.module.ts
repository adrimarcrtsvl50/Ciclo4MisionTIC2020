import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './administrador/menu/menu.component';
import { LoginComponent } from './seccion/login/login.component';
import { MenuCliComponent } from './clientes/menu-cli/menu-cli.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },

  {
    path: "menu", component: MenuComponent,
    children: [
      { path: 'home', loadChildren: () => import('./administrador/home/home.module').then(m => m.HomeModule) },
      { path: 'devoluciones', loadChildren: () => import('./administrador/devoluciones/devoluciones.module').then(m => m.DevolucionesModule) },
      { path: 'nuevo', loadChildren: () => import('./administrador/inventarios/nuevo/nuevo.module').then(m => m.NuevoModule) },
      { path: 'consultar', loadChildren: () => import('./administrador/inventarios/consultar/consultar.module').then(m => m.ConsultarModule) },
      { path: 'editar/:x', loadChildren: () => import('./administrador/devoluciones/editar/editar.module').then(m => m.EditarModule) },
    ]
  },
  { path: "login", component: LoginComponent },
  {
    path: "menu-cli", component: MenuCliComponent,
    children: [
      { path: 'homecli', loadChildren: () => import('./clientes/homecli/homecli.module').then(m => m.HomecliModule) },
      { path: 'producto', loadChildren: () => import('./clientes/producto/producto.module').then(m => m.ProductoModule) },
      { path: 'carrito/:X', loadChildren: () => import('./clientes/carrito/carrito.module').then(m => m.CarritoModule) },
      { path: 'nosotros', loadChildren: () => import('./clientes/nosotros/nosotros.module').then(m => m.NosotrosModule) },
      { path: 'contactanos', loadChildren: () => import('./clientes/contactanos/contactanos.module').then(m => m.ContactanosModule) },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
