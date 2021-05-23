import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private rest:RestHotelService) { }

  hotels:[];
  filterHotel;


  ngOnInit(): void {
    this.listHotel();
  }

  listHotel(){
    this.rest.getHotel().subscribe((res:any)=>{
      if(res.hotels){
        this.hotels = res.hotels;
        console.log('Hoteles cargados')
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

}
