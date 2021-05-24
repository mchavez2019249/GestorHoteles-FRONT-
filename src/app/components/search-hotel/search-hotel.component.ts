import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css'],
  animations: [fadeIn]
})
export class SearchHotelComponent implements OnInit {

  constructor(private rest:RestHotelService) { }

  hotels:[];
  filterHotel;


  ngOnInit(): void {
    this.listHoteles();
  }

  listHoteles(){
    this.rest.getHoteles().subscribe((res:any)=>{
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
