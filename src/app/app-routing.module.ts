import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { EventoComponent } from './components/evento/evento.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultadoSearchComponent } from './components/resultado-search/resultado-search.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
import { HomeHotelComponent } from './components/home-hotel/home-hotel.component';
import { UserComponent } from './components/user/user.component';



const routes: Routes = [
  //una manera de realizarlo
  {path: '', component: HomeComponent}, //un solo uso | va a ser la primer ruta que se mostrará (primer componente)
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'evento', component: EventoComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'searchH', component: SearchHotelComponent},
  {path: 'registro', component:RegisterComponent},
  {path: 'resultHotel', component:ResultadoSearchComponent},
  {path: 'saveHotel', component:SaveHotelComponent},
  {path: 'homeHotel', component:HomeHotelComponent},
  {path: 'user',component:UserComponent},
  {path: 'user', component:UserComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

