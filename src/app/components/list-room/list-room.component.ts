import { Component, OnInit } from '@angular/core';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { RestRoomService } from '../../services/restRoom/rest-room.service';
import { Room } from '../../models/room';
@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
  habitacion: [];
  hotel;
  roomSelected:Room;

  constructor(private restHotel:RestHotelService, private restRoom:RestRoomService) { 
  }

  ngOnInit(): void {
    this.roomSelected = new Room('','','',false,null)
    this.hotel = this.restHotel.getHotel()
    this.habitacion = this.hotel.habitacion;
    console.log(this.habitacion)
  }

  getRoom(room){
    this.roomSelected = room;
    console.log(room._id)
  }

  removeRoom(){
    this.restRoom.removeRoom(this.hotel._id, this.roomSelected._id).subscribe((res:any)=>{
      if(res.contactPull){
        alert(res.message);
        localStorage.setItem('hotel', JSON.stringify(res.contactPull))
        this.hotel = this.restHotel.getHotel()
        this.habitacion = this.hotel.habitacion;
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

}
