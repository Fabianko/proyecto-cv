import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

@Input() public json: any;

  constructor() { }

  ngOnInit() {
  }

}
