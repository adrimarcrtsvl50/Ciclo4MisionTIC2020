import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {
  infoConsulta:any;
  constructor(private rou:Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#t_consulta').DataTable();
    },200)
  }
  listar():void{
    this.http.get("http://localhost:8081/bikes",{responseType:"json"})
    .subscribe((Res:any)=>{
      console.log(Res);
      this.infoConsulta=Res;});
  }
  
  FormularioEditar(x:any):void{
    //alert(x);
    this.rou.navigate(["menu/editar",x]);
  }
}
