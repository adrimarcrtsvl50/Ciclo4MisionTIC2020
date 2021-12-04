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
  total: any = {
    Subtotal: "",
    Iva: "",
    Multa: "",
    Total: ""
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
  r:any={
    iva: "",
    multa: "",
    subTotal: "",
    total: ""
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
    let total = 0;
    this.items.forEach((item: any) => {
      total = total + item.precio * item.cantidad;

      // console.log("subtotal1",this.total.Subtotal,"precio", item.precio, "cantidad",item.cantidad) 
    })

    this.total.Subtotal = total
    this.total.Iva = Math.round(total * 0.19);
    this.total.Multa = Math.round(total * 0.10);
    this.total.Total = total + this.total.Iva + this.total.Multa;
    console.log("subtotal", total)
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
      this.rou.navigate(["/menu"]);
      
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
    });
    this.http.post("http://localhost:8081/pos",this.r)
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
    });
  }

}



