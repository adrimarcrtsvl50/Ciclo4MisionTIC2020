import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  m:any={
    email:"",
    contra:""
  }
  constructor(private r:Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }
  Iniciar():void{

    this.http.get("http://localhost:8081/profiles/consultarPorVariosParametros/"+this.m.email+"/"+this.m.contra+"", { responseType: "json" })
    .subscribe((Res: any) => {
      console.log(Res);
      if(Res.length===0){
        alert("No existe el registro");
      }
      for(var x of Res){
          if(x.id===""||x.id===null){
            alert("No existe el registro");
          }
          else{
            if(x.email=== this.m.email && x.contrasena===this.m.contra && x.tipo==="admin"){
              alert("Bienvenido "+x.nombre+" "+x.apellido );
                this.r.navigate(["/menu"]);
            }
            else{
              if(x.email=== this.m.email && x.contrasena===this.m.contra && x.tipo==="client"){
                alert("Bienvenido "+x.nombre+" "+x.apellido );
                  this.r.navigate(["/menu-cli"]);
              }
          
            }
          }
      }
    });
  }
}
