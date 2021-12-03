import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { CarritoSevice } from '../services/carrito.service';
import { HttpClient } from '@angular/common/http';

declare const Swal: any;
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items: any =  [];
  
  constructor( private  carrito: CarritoSevice,private http: HttpClient) { }

  ngOnInit(): void {
    this.items= this.carrito.ListarCarrito();
    console.log(this.items)
    
  }
  eliminar(x: any): void {
    this.items= this.carrito.eliminar(x);
    
    console.log(x)
  }
}



