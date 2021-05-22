import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestHotelService } from '../restHotel/rest-hotel.service';
import { RestUserService } from '../restUser/rest-user.service';


@Injectable({
  providedIn: 'root'
})
export class RestEventosService {
  public uri: string;
  public user;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public token;
  public evento;
  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }


  constructor(private restUser: RestUserService, private http:HttpClient) { 
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

  getEventos(){
    let eventos = JSON.parse(localStorage.getItem('eventos'));
    if(eventos != null || eventos != undefined){
      this.evento = eventos;
    }else {
      this.evento = null;
    }
    return this.evento;
  }

  setEventos(idUser, evento){
    let headers = new HttpHeaders({
      'Content-Type' : 'application.json',
      'Authorization' : this.restUser.getToken()
    })
    let params = JSON.stringify(evento);
    return this.http.put(this.uri+idUser+'/setEventos', params, {headers: headers})
    .pipe(map(this.extractData))
  }

  removeEvento(idUser, idEvento){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+idUser+'removeEvento/'+idEvento, {headers: headers})
    .pipe(map(this.extractData))
  }
}
