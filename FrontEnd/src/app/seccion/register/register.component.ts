import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const Swal:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  m:any = {
    
    nombre: "",
    apellido: "",
    tipodedocumento: "",
    numid: "",
    email: "",
    tipo: "",
    contrasena: ""
    
  }
  constructor(private rou:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  Registrar():void{
    this.http.post ("http://localhost:8081/profiles",this.m)
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
  }
}
