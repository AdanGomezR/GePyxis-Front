// servicios.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  searchTerm: string = '';
  servicios: any[] = [
    { id: 1, nombre: 'Servicio 1', descripcion: 'Descripción del servicio 1', imagen: 'URL de la imagen 1', precio: 100 },
    { id: 2, nombre: 'Servicio 2', descripcion: 'Descripción del servicio 2', imagen: 'URL de la imagen 2', precio: 150 },
    { id: 3, nombre: 'Servicio 3', descripcion: 'Descripción del servicio 3', imagen: 'URL de la imagen 3', precio: 200 },
    // Agrega más servicios aquí...
  ];

  filteredServicios: any[] = [];

  ngOnInit(): void {
    // Al cargar la página, mostrar todos los servicios
    this.filteredServicios = this.servicios;
  }

  searchServices() {
    if (this.searchTerm.trim() === '') {
      // Si la búsqueda está vacía, mostrar todos los servicios
      this.filteredServicios = this.servicios;
    } else {
      // Filtrar los servicios por el atributo "nombre"
      this.filteredServicios = this.servicios.filter(servicio =>
        servicio.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
