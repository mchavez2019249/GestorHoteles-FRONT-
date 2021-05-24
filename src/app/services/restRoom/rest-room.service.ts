import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestRoomService {
  public uri: string;
  public room;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public token;
  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http:HttpClient) { 
    this.uri = CONNECTION.URI;
  }

  test(){
    return 'Mensaje desde el servicio'
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

  getRoom(){
    let room = JSON.parse(localStorage.getItem('room'));
    if(room != null || room != undefined){
      this.room = room;
    }else{
      this.room = null;
    }
    return this.room;
  }

  saveRoom(room){
    let params = JSON.stringify(room);
    return this.http.post(this.uri + 'saveHabitacion/', params, this.httpOptions)
    .pipe(map(this.extractData));
  }

  removeRoom(eventoId , password){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+'removeEvento/'+eventoId , {password: password}, {headers: headers})
    .pipe(map(this.extractData))
  }

  getRooms(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'getHabitaciones', {headers: headers})
    .pipe(map(this.extractData))
  }

}
