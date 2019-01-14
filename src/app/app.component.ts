import { Component } from '@angular/core';

import * as personas from '../assets/personas.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
       console.log(personas);
   }

}


// personas;
// json;
// id;

// public seleccionarPersonas ($event) {
  //    console.log($event);
    //  this.json = this.personas[this.id];
  // }
