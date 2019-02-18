import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
@Input() public json: any;

  constructor() { }

  ngOnInit() {
  }

}
