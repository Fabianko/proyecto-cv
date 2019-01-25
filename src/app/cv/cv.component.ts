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
//  imgname = require('../../assets/image/foto.jpg');
  public personas: any;
  public json: any;

  // Valor inicial de id para tomar valor del primer optiom
  public id: any = '';
  public especialidad: any = '';


  constructor() {
  }

  ngOnInit() {
    this.personas = personas;
    this.especialidad =  especialidades;
  }

  public seleccionarPersonas ($event) {
       console.log($event);
       this.json = this.personas[this.id];
    }

    public seleccionarEspecialidad ($event) {
         console.log($event);
         this.json = this.especialidad[this.especialidad];
      }

}
