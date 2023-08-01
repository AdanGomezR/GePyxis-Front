import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Aquí implementa la lógica para enviar los datos de inicio de sesión
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Puedes agregar aquí la lógica para autenticar al usuario y redirigirlo a otra página
  }
}
