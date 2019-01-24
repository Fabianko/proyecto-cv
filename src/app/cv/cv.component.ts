// declare var require: any;
import { Component, OnInit } from '@angular/core';
import personas from '../../assets/json/personas.json';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
//  imgname = require('../../assets/image/foto.jpg');
  public personas: any;
  public json: any;
  public id: any;

  constructor() {
  }

  ngOnInit() {
    this.personas = personas;
  }

  public seleccionarPersonas ($event) {
       console.log($event);
       this.json = this.personas[this.id];
    }

}
