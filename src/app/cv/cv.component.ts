// declare var require: any;
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IdentidadComponent} from '../identidad/identidad.component';
import { PerfilComponent} from '../perfil/perfil.component';
import personas from '../../assets/json/personas.json';
// import especialidades from '../../assets/json/especialidades.json';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
@Input() public json: any;

@ViewChild ('appIdentidad') appIdentidad: IdentidadComponent;
@ViewChild ('appPerfil') appPerfil: PerfilComponent;

public _identidad: any;
public _perfil: any;

public get identidad() {
  return this._identidad;
}

public set identidad (identidad) {
  this._identidad = identidad;
  this.appIdentidad.json = identidad;
}

// public get pefil() {
//   return this._perfil;
// }
//
// public set perfil (perfil) {
//   this._perfil = perfil;
//   this.appPerfil.json = perfil;
// }

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
    this.personas = personas;
    this.identidad = event;
    // this.perfil = event;
    // this.especialidades = especialidades;
    // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  }

  // public seleccionarEspecialidad ($event) {
  //      console.log($event);
  //      console.log(this.especialidades);
  //      // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  //   }
}
