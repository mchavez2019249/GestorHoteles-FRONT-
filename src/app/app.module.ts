import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Servicios
import { RestUserService } from '../app/services/restUser/rest-user.service';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { EventoComponent } from './components/evento/evento.component';
import { ResultadoSearchComponent } from './components/resultado-search/resultado-search.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent} from './components/not-found/not-found.component';
import { RegisterComponent} from './components/register/register.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
import { HomeHotelComponent } from './components/home-hotel/home-hotel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HotelComponent,
    ServicioComponent,
    SearchHotelComponent,
    EventoComponent,
    ResultadoSearchComponent,
    UserComponent,
    NotFoundComponent,
    RegisterComponent,
    SaveHotelComponent,
    HomeHotelComponent,
    ProfileComponent,
    HabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [RestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
