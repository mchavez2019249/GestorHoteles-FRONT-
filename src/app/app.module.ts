import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HotelComponent,
    ServicioComponent,
    SearchHotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
