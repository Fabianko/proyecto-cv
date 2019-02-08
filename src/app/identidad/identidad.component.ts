import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-identidad',
  templateUrl: './identidad.component.html',
  styleUrls: ['./identidad.component.css']
})
export class IdentidadComponent implements OnInit {
@Input() public json: any;

  constructor() { }

  ngOnInit() {

  }

}
