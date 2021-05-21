import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css'],
  animations: [fadeIn]
})
export class SearchHotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
