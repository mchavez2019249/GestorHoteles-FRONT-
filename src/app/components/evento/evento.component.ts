import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/eventos.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  public event:Event;

  constructor() { 
    this.event = new Event('', '', false, null, '', '');
  }

  ngOnInit(): void {
  }

}
