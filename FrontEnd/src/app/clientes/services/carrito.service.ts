import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn:'root'
})
export class CarritoSevice{;
    Productos:any;
       items:any = [];
   
    constructor(private http: HttpClient){
        this.http.get("http://localhost:8081/bikes",{responseType:"json"})
    .subscribe((Res:any)=>{
      console.log(Res);
      this.Productos=Res;});
    }
    addCarriro(producto:any){
        this.items.push(producto);
    }

    LimpiarCarrito(){
        this.items=[];
        return this.items;
    }
    ListarCarrito(){
        return this.items;
    }
   
}