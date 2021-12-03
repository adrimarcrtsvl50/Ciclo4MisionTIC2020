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
  total:any = {
    Subtotal:"",
    Iva:"",
    Multa:"",
    Total:""
  };
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
    let total = 0;
    this.items.forEach((item: any) => {
      total = total + item.precio * item.cantidad;
          
       // console.log("subtotal1",this.total.Subtotal,"precio", item.precio, "cantidad",item.cantidad) 
    })

    this.total.Subtotal = total
    this.total.Iva=Math.round(total*0.19);
    this.total.Multa = Math.round(total*0.10);
    this.total.Total= total + this.total.Iva + this.total.Multa;
   console.log("subtotal",total)
}

  
}



