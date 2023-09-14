// servicios.component.ts
import { Component } from '@angular/core';
import { SolucionesServiceService } from '../services/soluciones-service.service';
import { Product } from '../models/product.model';
import {ApiResponse} from '../models/apiResponse.model'
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  public responseData: Product[]=[];
  constructor(private myService: SolucionesServiceService) { 
    
  }
  
  searchTerm: string = '';
  servicios: Product[] = [
    {
        node: {
            idProducto: 1,
            name: "GEP Wallet",
            description: "Software para la Gestión Financiera en la Nube para Microfinancieras en crecimiento",
            cost: 100,
            picture: "https://fixner.com/wp-content/uploads/2014/06/Software-en-la-nube-1030x566.jpg"
        }
    },
    {
        node: {
            idProducto: 2,
            name: "Desarrollo de Apps",
            description: "Desarrollamos aplicaciones móviles a la medida de tus requerimientos.",
            cost: 150,
            picture: "https://okhosting.com/wp-content/uploads/2015/12/como-crear-una-aplicacion-1024x683@2x.png"
        }
    },
    {
        node: {
            idProducto: 3,
            name: "Seguridad de Datos",
            description: "El quick assessment se enfoca en llevar a cabo un levantamiento de información que nos permita identificar brechas de seguridad informática en su entorno de Gobierno de TI, infraestructura tecnológica y comunicación que soporta sus sistemas críticos de negocio.",
            cost: 100,
            picture: "https://www.powerdata.es/hubfs/Destacada%20Cabecera%20pwd%20-%20Por%20qu%C3%A9%20la%20seguridad%20de%20datos%20es%20fundamental%20en%20la%20gesti%C3%B3n%20de%20datos.jpg"
        }
    },
    {
        node: {
            idProducto: 4,
            name: "Manage My People",
            description: "La razón número 1 por la cual las compañías pierden las quejas en la Junta Laboral o de Derechos Humanos, es la falta de documentos de respaldo.",
            cost: 100,
            picture: "https://www.bizneo.com/blog/wp-content/uploads/2020/03/ejemplo-gestion-recursos-humanos-810x455.webp"
        }
    },
    {
        node: {
            idProducto: 5,
            name: "SUA-Compliance",
            description: "Software para la Gestión Financiera en la Nube para Microfinancieras en crecimiento",
            cost: 100,
            picture: "https://www.fikai.com/wp-content/uploads/2020/05/2020-05-06-curso-de-superior-de-gestion-financiera.png"
        }
    },
    {
        node: {
            idProducto: 6,
            name: "Oracle-EBS",
            description: "Proporciona soporte de confianza, seguro y completo para evitar los riesgos potenciales del soporte de terceros para EBS.",
            cost: 100,
            picture: "https://media.licdn.com/dms/image/C4E12AQEI8K7zfB8ang/article-cover_image-shrink_600_2000/0/1593009694892?e=2147483647&v=beta&t=gjNCzN90GLFWS3QmR7NEFVpOfP3kJW1RPG2-AFSDY8k"
        }
    }
];

  filteredServicios: Product[] = [];

  ngOnInit(): void {
    // Al cargar la página, mostrar todos los servicios consumiendo el api
 /*   this.myService.postData().subscribe((response: ApiResponse) => {
      if (response && response.data && response.data.getProductosListing && response.data.getProductosListing.edges) {
        this.servicios = response.data.getProductosListing.edges;
        this.filteredServicios = this.servicios; // Mostrar todos los servicios inicialmente
      }
    }); */
// Al cargar la página, mostrar todos los servicios con data harcodeada
    this.filteredServicios = this.servicios;
  }

  searchServices() {

   
    if (this.searchTerm.trim() === '') {
      // Si la búsqueda está vacía, mostrar todos los servicios
      this.filteredServicios = this.servicios;
    } else {
      // Filtrar los servicios por el atributo "nombre"
      this.filteredServicios = this.servicios.filter(servicio =>
        servicio.node.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
