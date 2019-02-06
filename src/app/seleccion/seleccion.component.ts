import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import personas from '../../assets/json/personas.json';
import especialidades from '../../assets/json/especialidades.json';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {
@Output() cargarDatos = new  EventEmitter();

public personas: any;
public json: any;
public id: number = null;
public idEspecialidad: any = '';
public especialidades: any;
//  public jsonEspecialidad: any;
public captarPersonas: any = [];

  constructor() { }

  ngOnInit() {
    this.personas = personas;
    this.especialidades = especialidades;

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
    this.cargarDatos.emit($event);
    // this.json = {};
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].id === this.id) {
        // console.log('if', $event);
        this.json = this.personas[i];
        }
    }
  }

}
