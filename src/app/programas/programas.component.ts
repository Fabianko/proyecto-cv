import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})
export class ProgramasComponent implements OnInit {

@Input() public json: any;

  constructor() { }

  ngOnInit() {
  }

}
