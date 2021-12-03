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
  total:any = [];
  constructor( private  carrito: CarritoSevice,private http: HttpClient) { }

  ngOnInit(): void {
    this.items= this.carrito.ListarCarrito();
    console.log(this.items);
    this.carroTotal();
    
  }
  eliminar(x: any): void {
    this.items= this.carrito.eliminar(x);
    this.carroTotal()
    console.log(x)
  }
  carroTotal() {
    this.total = [];
    this.items.forEach((item: any) => {
        let  SubTotal =   item.precio * item.cantidad
        let Iva = SubTotal * 0.19
        let Multa = SubTotal * 0.10
        let Total = SubTotal + Iva + Multa  
        const newItem = {
            subtotal: SubTotal,
            iva :Iva,
            multa : Multa,
            totales:Total
        }
        this.total.push(newItem)
    })
   
}

  
}



