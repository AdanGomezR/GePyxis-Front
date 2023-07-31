// detalles-servicio.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-servicio',
  templateUrl: './detalles-servicio.component.html',
  styleUrls: ['./detalles-servicio.component.css']
})
export class DetallesServicioComponent implements OnInit {
  servicioId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el ID del servicio desde la ruta
    this.servicioId = +this.route.snapshot.paramMap.get('id')!;
    // Aquí puedes utilizar el ID para cargar los detalles específicos del servicio desde una fuente de datos (por ejemplo, una API o una lista en el componente)
  }
}
