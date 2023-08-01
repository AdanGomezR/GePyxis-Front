import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carrusel-nosotros1',
  templateUrl: './carrusel-nosotros1.component.html',
  styleUrls: ['./carrusel-nosotros1.component.css']
}) 
export class CarruselNosotros1Component {

  @ViewChild('carruselContainer') carruselContainer!: ElementRef;

  ngOnInit() {
    this.animateCarrusel();
  }

  animateCarrusel() {
    setInterval(() => {
      const carrusel = this.carruselContainer.nativeElement;
      const firstItem = carrusel.querySelector('.carrusel-item');

      carrusel.style.transition = 'transform 1s';
      carrusel.style.transform = 'translateX(-100%)';

      setTimeout(() => {
        carrusel.appendChild(firstItem!);
        carrusel.style.transition = 'none';
        carrusel.style.transform = 'translateX(0)';
      }, 1000);
    }, 5000); // Cambiar imágenes cada 5 segundos (ajustar según necesidades)
  }
}
