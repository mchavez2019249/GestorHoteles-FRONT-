import { Component, OnInit } from '@angular/core';
//Importacion del modelo hotel
import { Hotel } from '../../models/hotel'

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotel:Hotel;

  constructor() {
    this.hotel= new Hotel('', '', '', '', null, '', [], [], []);
   }

  ngOnInit(): void {
  }

}
