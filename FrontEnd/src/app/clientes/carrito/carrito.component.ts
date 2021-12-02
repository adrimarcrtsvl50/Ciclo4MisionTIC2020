import { Component, OnInit } from '@angular/core';
import { CarritoSevice } from '../services/carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items : any[] = [];
  constructor( private  carrito: CarritoSevice) { }

  ngOnInit(): void {
    this.items= this.carrito.ListarCarrito();
    console.log(this.items)
  }

}
