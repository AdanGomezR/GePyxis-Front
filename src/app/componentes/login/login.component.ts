import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  login() {
    // Aquí puedes implementar la lógica de inicio de sesión
    // por ejemplo, enviar los datos al servidor para autenticar al usuario.
    console.log('Iniciando sesión con email:', this.email, 'y contraseña:', this.password);
  }

  forgotPassword() {
    // Aquí puedes implementar la lógica para recuperar la contraseña.
    console.log('Recuperar contraseña para el email:', this.email);
  }

  onSubmit() {
    // Aquí implementa la lógica para enviar los datos de inicio de sesión
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Puedes agregar aquí la lógica para autenticar al usuario y redirigirlo a otra página
  }
}
