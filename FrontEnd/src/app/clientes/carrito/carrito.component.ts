import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { CarritoSevice } from '../services/carrito.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare const Swal: any;
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items: any = [];
  t: any = {
    subTotal: "",
    iva: "",
    multa: "",
    total: ""
  };
  m: any = {
    apellido: "",
    ciudad: "",
    departamento: "",
    direccion: "",
    email: "",
    nombre: "",
    telefono: ""

  }
  p:any={
    cvv: "",
    nombre: "",
    numero: "",
    vencimiento: ""
  }
 
  
  
  s:any={
    duracionEstimada: 3,
    duracionReal: 0,
    fechaEntrega: "",
    fechaFinal: "",
    fechaInicial: ""
    
  }
  constructor(private rou:Router, private carrito: CarritoSevice, private http: HttpClient) { }

  ngOnInit(): void {
    this.items = this.carrito.ListarCarrito();
    console.log(this.items);
    this.carroTotal();

  }
  eliminar(x: any): void {
    this.items = this.carrito.eliminar(x);
    this.carroTotal()
    console.log(x)
  }
  carroTotal() {
    let totales = 0;
    this.items.forEach((item: any) => {
      totales = totales + item.precio * item.cantidad;
      
      // console.log("subtotal1",this.total.Subtotal,"precio", item.precio, "cantidad",item.cantidad) 
    })

    this.t.subTotal = totales
    this.t.iva = Math.round(totales * 0.19);
    this.t.multa = Math.round(totales * 0.10);
    this.t.total = totales + this.t.iva + this.t.multa;
    console.log("subtotal", totales)
    console.log("sumas",this.t)
  }
  Guardar():void{
   
    this.http.post("http://localhost:8081/bill",this.m)
    .subscribe((Res:any)=>{
      console.log(Res);
      //alert("Registrado satisfactorio");

      Swal.fire({
        icon: 'success',
        title: 'Registro!!',
        text: 'Registrado satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
      })
      this.items = this.carrito.LimpiarCarrito(); 
    });
    this.http.post("http://localhost:8081/cards",this.p)
    .subscribe((Res:any)=>{
      console.log(Res);
      //alert("Registrado satisfactorio");

      Swal.fire({
        icon: 'success',
        title: 'Registro!!',
        text: 'Registrado satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
      })
      this.items = this.carrito.LimpiarCarrito()
    });
    this.http.post("http://localhost:8081/pos",this.t)
    .subscribe((Res:any)=>{
      console.log(Res);
      //alert("Registrado satisfactorio");

      Swal.fire({
        icon: 'success',
        title: 'Registro!!',
        text: 'Registrado satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
      })
      this.rou.navigate(["/menu-cli/producto"]);
    });
    this.http.post("http://localhost:8081/rents",this.s)
    .subscribe((Res:any)=>{
      console.log(Res);
      //alert("Registrado satisfactorio");

      Swal.fire({
        icon: 'success',
        title: 'Registro!!',
        text: 'Registrado satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
      })
      this.items = this.carrito.LimpiarCarrito();
      this.rou.navigate(["/menu-cli/producto"]);
    });
  }

}



