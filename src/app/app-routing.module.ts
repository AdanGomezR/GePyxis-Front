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
import { GeWalletComponent } from './products-detail/ge-wallet/ge-wallet.component';
import { ManagePeopleComponent } from './products-detail/manage-people/manage-people.component';
import { OracleEbsComponent } from './products-detail/oracle-ebs/oracle-ebs.component';
import { SuaComplianceComponent } from './products-detail/sua-compliance/sua-compliance.component';
 // Importa el componente para los detalles del servicio

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/:id', component: DetallesServicioComponent }, // Ruta para los detalles del servicio
  { path: 'soluciones', component: SolucionesComponent },
  { path: 'soluciones/GEP-Wallet', component: GeWalletComponent },
  { path: 'soluciones/Manage-my-people', component: ManagePeopleComponent },
  { path: 'soluciones/SUA-Complaince', component: SuaComplianceComponent },
  { path: 'soluciones/Oracle-EBS', component:  OracleEbsComponent},
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
