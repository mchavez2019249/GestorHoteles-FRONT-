import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../models/hotel';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-save-hotel',
  templateUrl: './save-hotel.component.html',
  styleUrls: ['./save-hotel.component.css']
})
export class SaveHotelComponent implements OnInit {
  public hotel:Hotel;
  public user;
  
  constructor(private restHotel:RestHotelService, private restUser:RestUserService) {
    this.hotel = new Hotel('','','','',null,'',[],[],[]);
   }

   ngOnInit(): void {
  
    this.user = this.restUser.getUser();
  }

  

}
