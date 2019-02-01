// declare var require: any;
import { Component, OnInit } from '@angular/core';
import personas from '../../assets/json/personas.json';
import especialidades from '../../assets/json/especialidades.json';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  public personas: any;
  public json: any;

  // Valor inicial de id para tomar valor del primer optiom
  public id: number = null;
  public idEspecialidad: any = '';
  public especialidades: any;
  public jsonEspecialidad: any;
  public captarPersonas: any = [];

  constructor() {
  }

  ngOnInit() {
    this.personas = personas;
    this.especialidades = especialidades;
    // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  }

  cargarPersonas(id) {
    this.captarPersonas = [];
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].idEspecialidad === id) {
        // console.log('if', $event);
        this.captarPersonas.push(this.personas[i]);
        return this.captarPersonas;
      } else {
        this.id = null;
      }
    }
    this.json = null;
      // console.log(this.captarPersonas.length);
  }

  public seleccionarPersonas($event) {
    console.log($event);
    this.json = {};
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].id === this.id) {
        // console.log('if', $event);
        this.json = this.personas[i];
        }
    }

  }

  // public seleccionarEspecialidad ($event) {
  //      console.log($event);
  //      console.log(this.especialidades);
  //      // this.jsonEspecialidad = this.especialidades(this.idEspecialidad);
  //   }
}
