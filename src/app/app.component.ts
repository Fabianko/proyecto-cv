import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Resumen Curricular Desarroladores';

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
