import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare const Swal:any;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  m:any = {
    
    color: "",
    edad: "",
    estado: "",
    genero: "",
    marca: "",
    modelo: "",
    precio: "",
    tamano: "",
    tipo: ""
  }
  constructor(private rou:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  guardar(): void {
    this.http.post ("http://localhost:8081/bikes",this.m)
    .subscribe((Res:any)=>{
      console.log(Res);
      //alert("Registrado satisfactorio");

      Swal.fire({
        icon: 'success',
        title: 'Bicicletas!!',
        text: 'Registrado satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
      })

      this.rou.navigate(["/menu/consultar"]);
    });
  }

}
