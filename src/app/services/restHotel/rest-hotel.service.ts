import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { RestUserService } from '../restUser/rest-user.service';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class RestHotelService {

  public user;
  public token;
  public hotel;

  public uri:string;
  public httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  };

  private extractData(res: Response){
  let body = res;
  return body || [] || {};
  }


  constructor(private restUser:RestUserService, private http:HttpClient) { 
    this.uri = CONNECTION.URI;
  }

  test(){
    return 'Mensaje de prueba del servicio para hotel'
  } 

  getToken(){
    let token = localStorage.getItem('token');
    if(token != null || token != undefined){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token; 
  }

  getHotel(){
    let hotel = JSON.parse(localStorage.getItem('hotel'));
    if(hotel != null || hotel != undefined){
      this.hotel = hotel;
    }else{
      this.hotel = null;
    }
    return this.hotel;
  }

  saveHotelAdmin(idUser, hotel){
    let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': this.restUser.getToken()
     })
     let params = JSON.stringify(hotel);
     return this.http.post(this.uri+'/saveHotelAdmin/'+idUser, params, {headers:headers})
     .pipe(map(this.extractData))
   }

  updateHotel(hotelToUpdate){
    let params = JSON.stringify(hotelToUpdate);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+'updateHotel/'+hotelToUpdate._id, params, {headers: headers})
    .pipe(map(this.extractData))
  }

  deleteHotel(idHotel, password){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+'removeUser/'+idHotel, {password: password}, {headers: headers})
    .pipe(map(this.extractData))
  }

  getHoteles(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'getHoteles', {headers: headers})
    .pipe(map(this.extractData))
  }
} 