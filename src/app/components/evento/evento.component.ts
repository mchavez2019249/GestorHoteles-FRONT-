import { Component, OnInit } from '@angular/core';
import { RestEventosService } from '../../services/restEventos/rest-eventos.service';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  public eventos: [];
  hotel;
  eventSelected:Event;

  constructor(private restHotel:RestHotelService, private restEventos:RestEventosService) { }

  ngOnInit(): void {
    this.eventSelected = new Event('','',false,null,'','')
    this.hotel = this.restHotel.getHotel()
    this.eventos = this.hotel.eventos;
    console.log(this.eventos)
  }

  getEvent(event){
    this.eventSelected = event;
    console.log(event._id)
  }

  removeEvento(){
    this.restEventos.removeEvento(this.hotel._id, this.eventSelected._id).subscribe((res:any)=>{
      if(res.eventPull){
        alert(res.message);
        localStorage.setItem('hotel', JSON.stringify(res.eventPull))
        this.hotel = this.restHotel.getHotel()
        this.eventos = this.hotel.eventos;
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }
}
