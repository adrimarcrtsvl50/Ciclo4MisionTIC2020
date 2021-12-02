import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarritoSevice } from '../services/carrito.service';


declare const Swal: any;
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  infoConsulta: any;
  
  constructor(public carrito: CarritoSevice ,private rou: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.listar();


  }
  listar(): void {
    this.http.get("http://localhost:8081/bikes", { responseType: "json" })
      .subscribe((Res: any) => {
        console.log(Res);
        this.infoConsulta = Res;
      });
  }

  addCarrito(x:any){
    const m = this.infoConsulta;

    if (m.estado === "prestamo" || m.estado === "mantenimiento") {
      Swal.fire("El estado de la Bicicleta", "la bicicleta se encuentra en mantenimiento o prestada.", "error");
    } else {
      this.carrito.addCarriro(x);
      window.alert("producto adicionado con el id" + x)

    }
  }


}
