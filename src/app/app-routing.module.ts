import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultadoSearchComponent } from './components/resultado-search/resultado-search.component';
import { SaveHotelComponent } from './components/save-hotel/save-hotel.component';
import { HomeHotelComponent } from './components/home-hotel/home-hotel.component';
import { UserComponent } from './components/user/user.component';
import { ListRoomComponent } from './components/list-room/list-room.component';
import { ListEventoComponent } from './components/list-evento/list-evento.component';





const routes: Routes = [
//importacion de components
  {path: '', component: HomeComponent}, //un solo uso | va a ser la primer ruta que se mostrarĂ¡ (primer componente)
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'searchH', component: SearchHotelComponent},
  {path: 'registro', component:RegisterComponent},
  {path: 'resultHotel', component:ResultadoSearchComponent},
  {path: 'saveHotelAdmin', component:SaveHotelComponent},
  {path: 'homeHotel', component:HomeHotelComponent},
  {path: 'user',component:UserComponent},
  {path: 'habitaciones', component:ListRoomComponent},
  {path: 'evento', component:ListEventoComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }