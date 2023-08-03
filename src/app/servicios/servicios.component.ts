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
    { id: 1, nombre: 'GEP Wallet', descripcion: 'Software para la Gestión Financiera en la Nube para Microfinancieras en crecimiento', imagen: 'https://fixner.com/wp-content/uploads/2014/06/Software-en-la-nube-1030x566.jpg', precio: 100 },
    { id: 2, nombre: 'Desarrollo de Apps', descripcion: 'Desarrollamos aplicaciones móviles a la medida de tus requerimientos.', imagen: 'https://okhosting.com/wp-content/uploads/2015/12/como-crear-una-aplicacion-1024x683@2x.png', precio: 150 },
    { id: 3, nombre: 'Seguridad de Datos', descripcion: 'El quick assessment se enfoca en llevar a cabo un levantamiento de información que nos permita identificar brechas de seguridad informática en su entorno de Gobierno de TI, infraestructura tecnológica y comunicación que soporta sus sistemas críticos de negocio.', imagen: 'https://www.powerdata.es/hubfs/Destacada%20Cabecera%20pwd%20-%20Por%20qu%C3%A9%20la%20seguridad%20de%20datos%20es%20fundamental%20en%20la%20gesti%C3%B3n%20de%20datos.jpg', precio: 200 },
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
