import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestEventosService {
  public uri: string;
  public event;
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

  getEvent(){
    let event = JSON.parse(localStorage.getItem('event'));
    if(event != null || event != undefined){
      this.event = event;
    }else{
      this.event = null;
    }
    return this.event;
  }

  saveEvent(event){
    let params = JSON.stringify(event);
    return this.http.post(this.uri + 'saveEvento/', params, this.httpOptions)
    .pipe(map(this.extractData));
  }

  saveUserByAdmin(event, idAdmin){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(event);
    return this.http.post(this.uri + 'saveUserOnlyAdmin/'+idAdmin, params, {headers:headers})
      .pipe(map(this.extractData));
  }

  removeEvent(eventoId , password){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+'removeEvento/'+eventoId , {password: password}, {headers: headers})
    .pipe(map(this.extractData))
  }

  getEvents(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'getEventos', {headers: headers})
    .pipe(map(this.extractData))
  }
}


