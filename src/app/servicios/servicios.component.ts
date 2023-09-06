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
  servicios: Product[] = [];

  filteredServicios: Product[] = [];

  ngOnInit(): void {
    // Al cargar la página, mostrar todos los servicios
    this.myService.postData().subscribe((response: ApiResponse) => {
      if (response && response.data && response.data.getProductosListing && response.data.getProductosListing.edges) {
        this.servicios = response.data.getProductosListing.edges;
        this.filteredServicios = this.servicios; // Mostrar todos los servicios inicialmente
      }
    });
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
