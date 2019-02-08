import { Component, ViewChild } from '@angular/core';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Resumen Curricular Desarroladores';
  public item: any;
  @ViewChild ('appCv') appCv: CvComponent;

  recibe(event) {
    console.log(event);
    this.item = event;
    this.appCv.identidad = this.item;
    // this.appCv.perfil = this.item;
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
