import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';
import { DetallesServicioComponent } from './componentes/detalles-servicio/detalles-servicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
 // Importa el componente para los detalles del servicio

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/:id', component: DetallesServicioComponent }, // Ruta para los detalles del servicio
  { path: 'soluciones', component: SolucionesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent }, 
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
