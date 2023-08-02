// carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';


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
export class CarritoComponent  implements OnInit {
  products: any[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.cartTotal = this.cartService.getTotal();
  }

  pay(): void {
    // Aquí puedes implementar la lógica para el proceso de pago
    // Puedes mostrar un mensaje de confirmación o redireccionar a una página de pago real
  }
   // Función para eliminar un producto del carrito
   removeFromCart(product: Product): void {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
