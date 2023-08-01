import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  //isMenuOpen: boolean = false;
/*
  toggleMenu(open: boolean) {
    this.isMenuOpen = open;
    if (!open) {
      // Si el menú se cierra, esperamos un corto tiempo antes de cambiar el estado.
      // Esto evita que el menú parpadee cuando pasas el cursor rápidamente.
      setTimeout(() => {
        this.isMenuOpen = open;
      }, 300);
    }
  }*/
}
