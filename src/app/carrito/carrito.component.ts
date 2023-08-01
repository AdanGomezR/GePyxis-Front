// carrito.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: any[] = []; // Aquí se almacenarán los elementos del carrito

  agregarAlCarrito(item: any) {
    this.carrito.push(item);
  }

  eliminarItem(item: any) {
    const index = this.carrito.indexOf(item);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}
