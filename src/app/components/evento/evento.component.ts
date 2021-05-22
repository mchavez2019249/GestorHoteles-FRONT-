import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  event:[];
  hotel;


  constructor(private restHotel:RestHotelService) { 
  }

  ngOnInit(): void {
    this.hotel = this.restHotel.getHotel();
    this.event = this.hotel.event;
    console.log(this.event)
  }

}
