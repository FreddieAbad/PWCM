import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactosComponent } from './contactos/contactos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { LoginComponent } from './login/login.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MapasComponent } from './mapas/mapas.component';
import { P404Component } from './p404/p404.component';
import { MapastestComponent } from './mapastest/mapastest.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { EdadparqueautomotorComponent } from './edadparqueautomotor/edadparqueautomotor.component';
import { NivelaccesibilidadtranspubComponent } from './nivelaccesibilidadtranspub/nivelaccesibilidadtranspub.component';
import { UsuariostranspubComponent } from './usuariostranspub/usuariostranspub.component';
import { ViajestransbordoComponent } from './viajestransbordo/viajestransbordo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactosComponent,
    EquipoComponent,
    LoginComponent,
    OpinionesComponent,
    PerfilComponent,
    ProyectosComponent,
    MapasComponent,
    P404Component,
    MapastestComponent,
    HomeComponent,
    EdadparqueautomotorComponent,
    NivelaccesibilidadtranspubComponent,
    UsuariostranspubComponent,
    ViajestransbordoComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
