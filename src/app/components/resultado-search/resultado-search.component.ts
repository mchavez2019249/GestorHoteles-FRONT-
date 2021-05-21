import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';

@Component({
  selector: 'app-resultado-search',
  templateUrl: './resultado-search.component.html',
  styleUrls: ['./resultado-search.component.css'],
  animations: [fadeIn]
})
export class ResultadoSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
