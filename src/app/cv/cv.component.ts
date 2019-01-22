import { Component, OnInit } from '@angular/core';
import personas from '../../assets/personas.json';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  public personas: any;
  public json: any;
  public id: any;

  constructor() {
  }

  ngOnInit() {
    this.personas = personas;
    console.log(JSON.stringify(personas));
  }



  public seleccionarPersonas ($event) {
       console.log($event);
       this.json = this.personas[this.id];
    }

}
