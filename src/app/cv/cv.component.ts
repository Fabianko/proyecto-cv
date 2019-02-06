// declare var require: any;
import { Component, OnInit, Input } from '@angular/core';
import personas from '../../assets/json/personas.json';
// import especialidades from '../../assets/json/especialidades.json';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
@Input() public json: any;


public identidad: any;

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
    // this.especialidades = especialidades;
    // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  }

  recibirIdentidad(event) {
    console.log(event);
    this.identidad = event;
  }

  // public seleccionarEspecialidad ($event) {
  //      console.log($event);
  //      console.log(this.especialidades);
  //      // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  //   }
}
