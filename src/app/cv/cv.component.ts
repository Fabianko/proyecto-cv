// declare var require: any;
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IdentidadComponent } from '../identidad/identidad.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { AptitudesComponent } from '../aptitudes/aptitudes.component';
import { ProgramasComponent } from '../programas/programas.component';
import { EstudiosComponent } from '../estudios/estudios.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
// import especialidades from '../../assets/json/especialidades.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @Input() public json: any;

  @ViewChild('appIdentidad') appIdentidad: IdentidadComponent;
  @ViewChild('appPerfil') appPerfil: PerfilComponent;
  @ViewChild('appAptitudes') appAptitudes: AptitudesComponent;
  @ViewChild('appProgramas') appProgramas: ProgramasComponent;
  @ViewChild('appEstudios') appEstudios: EstudiosComponent;
  @ViewChild('appExperiencia') appExperiencia: ExperienciaComponent;

  public _identidad: any;
  public _perfil: any;
  public _aptitud: any;
  public _programa: any;
  public _estudio: any;
  public _experiencia: any;

  public get identidad() {
    return this._identidad;
  }
  public set identidad(identidad) {
    this._identidad = identidad;
    // console.log(identidad);
    if (this.appIdentidad) {
      this.appIdentidad.json = identidad;
    }
  }
  public get perfil() {
    return this._perfil;
  }
  public set perfil(perfil) {
    this._perfil = perfil;
    if (this.appPerfil) {
      this.appPerfil.json = perfil;
      console.log(perfil);
    }
  }
  public get aptitud() {
    return this._aptitud;
  }
  public set aptitud(aptitud) {
    this._aptitud = aptitud;
    if (this.appAptitudes) {
      this.appAptitudes.json = aptitud;
      console.log(aptitud);
    }
  }
  public get programa() {
    return this._programa;
  }
  public set programa(programa) {
    this._programa = programa;
    if (this.appProgramas) {
      this.appProgramas.json = programa;
      console.log(programa);
    }
  }
  public get estudio() {
    return this._estudio;
  }

  public set estudio(estudio) {
    this._estudio = estudio;
    if (this.appEstudios) {
      this.appEstudios.json = estudio;
      console.log(estudio);
    }
  }
  public get experiencia() {
    return this._experiencia;
  }

  public set experiencia(experiencia) {
    this._experiencia = experiencia;
    if (this.appEstudios) {
      this.appExperiencia.json = experiencia;
      console.log(experiencia);
    }
  }

  public personas: any;
  //   // public json: any;
  //
  //   // Valor inicial de id para tomar valor del primer optiom
  //   public id: number = null;
  //   public idEspecialidad: any = '';
  //   public especialidades: any;
  // //  public jsonEspecialidad: any;
  //   public captarPersonas: any = [];

  constructor() {

  }

  ngOnInit() {
    // this.especialidades = especialidades;
    // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  }

  // public seleccionarEspecialidad ($event) {
  //      console.log($event);
  //      console.log(this.especialidades);
  //      // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  //   }
}
