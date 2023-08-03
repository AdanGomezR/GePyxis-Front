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
    { id: 4, nombre: 'Manage My People', descripcion: 'La razón número 1 por la cual las compañías pierden las quejas en la Junta Laboral o de Derechos Humanos, es la falta de documentos de respaldo. ', imagen: 'https://www.bizneo.com/blog/wp-content/uploads/2020/03/ejemplo-gestion-recursos-humanos-810x455.webp', precio: 100 },
    { id: 5, nombre: 'SUA-Compliance', descripcion: 'Software para la Gestión Financiera en la Nube para Microfinancieras en crecimiento', imagen: 'https://www.fikai.com/wp-content/uploads/2020/05/2020-05-06-curso-de-superior-de-gestion-financiera.png', precio: 100 },
    { id: 6, nombre: 'Oracle-EBS', descripcion: 'Proporciona soporte de confianza, seguro y completo para evitar los riesgos potenciales del soporte de terceros para EBS.', imagen: 'https://media.licdn.com/dms/image/C4E12AQEI8K7zfB8ang/article-cover_image-shrink_600_2000/0/1593009694892?e=2147483647&v=beta&t=gjNCzN90GLFWS3QmR7NEFVpOfP3kJW1RPG2-AFSDY8k', precio: 100 },
    

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
