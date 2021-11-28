import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare const $: any;
declare const Swal: any;

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  infoConsulta: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.listar();

    setTimeout(function () {
      $('#t_consulta').DataTable();
    }, 200)

  }
  listar(): void {
    this.http.get("http://localhost:8081/bikes", { responseType: "json" })
      .subscribe((Res: any) => {
        console.log(Res);
        this.infoConsulta = Res;
      });
  }
  eliminar(x: any): void {

    Swal.fire({
      title: 'Esta seguro que desea eliminar la bicicleta?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Si, Deseo Eliminarla',
      //denyButtonText: `Don't save`,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'success');
        this.http.delete("http://localhost:8081/bikes/" + x)
          .subscribe((Res: any) => {
            console.log(Res);
            this.listar();
          });
      }
    })



  }

}
