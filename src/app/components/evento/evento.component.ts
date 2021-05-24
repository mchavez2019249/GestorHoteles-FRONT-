import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { RestEventosService } from '../../services/restEventos/rest-eventos.service';
import { UploadUserService } from 'src/app/services/uploadUser/upload-user.service';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  public title;
  public event:Event;
  public token;
  public possiblePass;
  public filesToUpload:Array<File>;
  public message;
  public status:boolean;
  public uri;


  constructor(private restEvent:RestEventosService, private router:Router, private uploadUser:UploadUserService) { 
    this.title = 'Your Event';
    this.event = this.restEvent.getEvent();
    this.token = this.restEvent.getToken();
    this.possiblePass = '';
    this.uri = CONNECTION.URI;
  }


  ngOnInit(): void {
  }

  removeEvento(){
    this.restEvent.removeEvent(this.event._id, this.possiblePass).subscribe((res:any)=>{
      if(!res.eventRemoved){
        alert(res.message)
      }else{
        alert(res.message);
        localStorage.clear();
        this.router.navigateByUrl('home')
      }
    },
    error=> alert(error.error.message))
  }

  fileChange(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}
