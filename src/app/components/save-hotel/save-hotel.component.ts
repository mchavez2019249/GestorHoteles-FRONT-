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
  public token;
  
  constructor(private restHotel:RestHotelService, private restUser:RestUserService) {
    this.hotel = new Hotel('','','','',null,'',[],[],[]);
   }

   ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }

  onSubmit(form){
    this.restHotel.saveHotelAdmin(this.user._id, this.hotel).subscribe((res:any)=>{
      if(res.hotelSaved){
        alert(res.message)
        form.reset()
        this.hotel = res.hotelSaved;
        localStorage.setItem('hotel', JSON.stringify(this.hotel));
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.error.message))
  }


}
