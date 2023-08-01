// carrito.component.ts
import { Component } from '@angular/core';

interface Producto {
  imagen: string;
  nombre: string;
  precio: number;
}

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
  productos: Producto[] = [
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4YdkaDuKbvtSJYdDke7ljWyAgy2vaP6NDg&usqp=CAU', nombre: 'Producto 1', precio: 10 },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4YdkaDuKbvtSJYdDke7ljWyAgy2vaP6NDg&usqp=CAU', nombre: 'Producto 2', precio: 15 },
    { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4YdkaDuKbvtSJYdDke7ljWyAgy2vaP6NDg&usqp=CAU', nombre: 'Producto 3', precio: 20 },
    // Agrega más productos según necesites
  ];

  getTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}
