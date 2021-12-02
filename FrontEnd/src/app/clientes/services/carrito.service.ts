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
        let encontrado=false;
        const newItem = {
            id:producto.id,
            marca: producto.marca,
            precio: producto.precio,
            tamano: producto.tamano,
            cantidad: 1
        }
        this.items.forEach((elemento:any) => {
            if(elemento.id==producto.id){
                encontrado=true;
                elemento.cantidad ++;
            }
        });
        if(!encontrado){
            this.items.push(newItem)   
        }
        
    }

    LimpiarCarrito(){
        this.items=[];
        return this.items;
    }
    ListarCarrito(){
        return this.items;
    }
   
}