import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { RestEventosService } from '../../services/restEventos/rest-eventos.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css']
})
export class ListEventoComponent implements OnInit {
  eventos:[];
  hotel;
  eventSelected:Event;
 

  constructor(private restHotel:RestHotelService, private restEventos:RestEventosService) { 
  }

  ngOnInit(): void {
    this.eventSelected = new Event('','',false,null,'','')
    this.listEventos();
    console.log(this.eventos)
  }

  getEvent(event){
    this.eventSelected = event;
    console.log(event._id)
  }

  listEventos(){
    this.restEventos.getEvents().subscribe((res:any)=>{
      if(res.users){
        this.eventos = res.event;
        console.log('eventos cargados')
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

  removeEvent(){
    this.restEventos.removeEvent(this.hotel._id, this.eventSelected._id).subscribe((res:any)=>{
      if(res.contactPull){
        alert(res.message);
        localStorage.setItem('hotel', JSON.stringify(res.contactPull))
        this.hotel = this.restHotel.getHotel()
        this.eventos = this.hotel.eventos;
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

}
