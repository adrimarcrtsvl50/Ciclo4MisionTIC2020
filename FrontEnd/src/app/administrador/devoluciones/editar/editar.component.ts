import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const Swal:any;

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  m: any = {
    id: "",
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
  constructor(private rou:Router,private rouvar: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.m.id = this.rouvar.snapshot.params["x"];
    this.http.get("http://enbike.jelastic.saveincloud.net/bikes/" + this.m.id, { responseType: "json" })
      .subscribe((Res: any) => {
        console.log(Res);
        this.m.color = Res.color;
        this.m.edad = Res.edad;
        this.m.estado = Res.estado;
        this.m.genero = Res.genero;
        this.m.marca = Res.marca;
        this.m.modelo = Res.modelo;
        this.m.precio = Res.precio;
        this.m.tamano = Res.tamano;
        this.m.tipo = Res.tipo;

      });
  }
  Actualizar(){
    this.http.put ("http://enbike.jelastic.saveincloud.net/bikes/"+this.m.id,this.m)
    .subscribe((Res:any)=>{
      console.log(Res);
      //alert("Actualizado satisfactoriamente");
      Swal.fire({
        icon: 'success',
        title: 'Bicicletas!!',
        text: 'Actualizado satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
      })
      this.rou.navigate(["/menu/devoluciones"]);
    });
  }
}
