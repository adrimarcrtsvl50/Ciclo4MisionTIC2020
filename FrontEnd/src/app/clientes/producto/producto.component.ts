import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


declare const Swal:any;
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  infoConsulta: any;
  constructor(private rou:Router,private http: HttpClient) { }
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
  
  button_add(x:any):void{
    this.http.get("http://localhost:8081/bikes", { responseType: "json" })
      .subscribe((Res: any) => {
        console.log(Res);
         for(var m of Res ){
           if(m.estado==="prestamo" || m.estado === "mantenimiento"){
            Swal.fire("El estado de la Bicicleta", "la bicicleta se encuentra en mantenimiento o prestada.", "error");
           }else{
            if(m.estado==="disponible"){
           // this.rou.navigate(["menu-cli/carrito",x]);
            }
           }
         }
      });
  }
   
  
}
