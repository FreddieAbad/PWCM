import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { P404Component } from './p404/p404.component';
import { ContactosComponent } from './contactos/contactos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { FooterComponent } from './footer/footer.component';
// import { headerComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MapasComponent } from './mapas/mapas.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MapastestComponent } from './mapastest/mapastest.component';
import { EdadparqueautomotorComponent } from './edadparqueautomotor/edadparqueautomotor.component';

const routes: Routes = [
  { path: '', component: FooterComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'opiniones', component: OpinionesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'mapastest', component: MapastestComponent },
  { path: 'edadparqueautomotor', component: EdadparqueautomotorComponent },
  
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
