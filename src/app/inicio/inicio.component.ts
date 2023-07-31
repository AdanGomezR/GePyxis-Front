import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  carouselImages = [
    { image: 'url_de_la_imagen_1.jpg', page: 'Servicios' },
    { image: 'url_de_la_imagen_2.jpg', page: 'Soluciones' },
    { image: 'url_de_la_imagen_3.jpg', page: 'Proyectos' },
  ];

  currentSlide = 0;
  navigateToPage(page: string) {
    // Aquí puedes redirigir a la página correspondiente
    console.log(`Ir a la página: ${page}`);
  }

  products = [
    {
      title: 'Producto 1',
      image: 'url_de_la_imagen_producto_1.jpg',
      description: 'Descripción del producto 1.',
    },
    {
      title: 'Producto 2',
      image: 'url_de_la_imagen_producto_2.jpg',
      description: 'Descripción del producto 2.',
    },
    {
      title: 'Producto 3',
      image: 'url_de_la_imagen_producto_3.jpg',
      description: 'Descripción del producto 3.',
    },
  ];
}
