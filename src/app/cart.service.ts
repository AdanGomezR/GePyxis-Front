// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products = [
    {
      id: 1,
      image: 'https://www.aguaeden.es/sites/default/files/blog_migrate/iStock-500095232.jpg',
      name: 'GEP Wallet',
      description: 'Software para la Gestión Financiera en la Nube para Microfinancieras en crecimiento',
      quantity: 1,
      price: 1000
    },
    {
      id: 2,
      image: 'https://www.qualitydevs.com/wp-content/uploads/2021/03/Desarrollo-apps-moviles-1288x724.jpg',
      name: 'Desarrollo de Apps',
      description: 'Desarrollamos aplicaciones móviles a la medida de tus requerimientos.',
      quantity: 1,
      price: 1000
    }
    // Agrega más productos aquí...
  ];

  getProducts() {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((total, product) => total + product.quantity * product.price, 0);
  }

  // Aquí puedes agregar métodos para agregar, eliminar productos, etc.
}
