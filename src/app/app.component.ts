import { Component, ViewChild } from '@angular/core';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Resumen Curricular Desarroladores';
  public infoPersona: any;
  @ViewChild ('appCv') appCv: CvComponent;

  recibirPersona(event) {
    console.log(event);
    this.infoPersona = event;
    // debugger;
    this.appCv.identidad = this.infoPersona;
    this.appCv.perfil = this.infoPersona;
    this.appCv.aptitud = this.infoPersona;
    this.appCv.programa = this.infoPersona;
    this.appCv.estudio = this.infoPersona;
    this.appCv.experiencia = this.infoPersona;
    // this.appCv.aptitudes = this.infoPersona;
  }

  constructor() {
    // this.personas = require('../assets/personas.json');
    // console.log(this.personas);
   }
}
// personas;
// json;
// id;

// public seleccionarPersonas ($event) {
  //    console.log($event);
    //  this.json = this.personas[this.id];
  // }
