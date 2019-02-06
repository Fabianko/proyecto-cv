import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-identidad',
  templateUrl: './identidad.component.html',
  styleUrls: ['./identidad.component.css']
})
export class IdentidadComponent implements OnInit {
@Input() public json: any;
@Output() cargarIdentidad = new  EventEmitter();

  constructor() { }

  ngOnInit() {

  }

public cargarDatosPersona ($event) {
  this.cargarIdentidad.emit($event);
}

}
