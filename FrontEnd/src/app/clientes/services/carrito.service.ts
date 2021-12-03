import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CarritoSevice {
        
    Productos: any;
    items: any = [];
    total: any = [];
    constructor(private http: HttpClient) {
        this.http.get("http://localhost:8081/bikes", { responseType: "json" })
            .subscribe((Res: any) => {
                console.log(Res);
                this.Productos = Res;
            });
    }
    addCarriro(producto: any) {
        let encontrado = false;
        const newItem = {
            id: producto.id,
            marca: producto.marca,
            precio: producto.precio,
            tamano: producto.tamano,
            cantidad: 1
        }
        this.items.forEach((elemento: any) => {
            if (elemento.id == producto.id) {
                encontrado = true;
                elemento.cantidad++;
            }
        });
        if (!encontrado)
            this.items.push(newItem)
        localStorage.setItem("carrito", JSON.stringify(this.items));


    }

    LimpiarCarrito() {
        this.items = [];
        return this.items;
    }
    eliminar(id: any) {
        const resulatdo = this.items.findIndex((e: any) => e.id == id);
        this.items.splice(resulatdo, 1);
        return this.items;
        
    }

    ListarCarrito() {
        //this.items = JSON.parse(localStorage.getItem("carrito"));
        return this.items;

    }
    carroTotal() {
        this.items.forEach((item: any) => {
            let  SubTotal =   item.precio * item.cantidad
            let Iva = SubTotal * 0.19
            let Multa = SubTotal * 0.10
            let Total = SubTotal + Iva + Multa  
            const newItem = {
                subtotal: SubTotal,
                iva :Iva,
                multa : Multa,
                totales:Total
            }
            
        })
       
    }
    
}