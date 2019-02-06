import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { IdentidadComponent } from './identidad/identidad.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { ProgramasComponent } from './programas/programas.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CvComponent,
    SeleccionComponent,
    IdentidadComponent,
    PerfilComponent,
    AptitudesComponent,
    ProgramasComponent,
    EstudiosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  exports: [BsDropdownModule, NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
