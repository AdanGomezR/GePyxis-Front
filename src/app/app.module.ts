import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MisionVisionComponent } from './componentes/mision-vision/mision-vision.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DetallesServicioComponent } from './componentes/detalles-servicio/detalles-servicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarruselNosotros1Component } from './componentes/carrusel-nosotros1/carrusel-nosotros1.component';
import { CarruselNosotrosSociosComponent } from './componentes/carrusel-nosotros-socios/carrusel-nosotros-socios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    SolucionesComponent,
    ProyectosComponent,
    AboutComponent,
    NavbarComponent,
    MisionVisionComponent,
    FooterComponent,
    DetallesServicioComponent,
    LoginComponent,
    CarritoComponent,
    CarruselNosotros1Component,
    CarruselNosotrosSociosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    FormsModule,
    MatListModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
