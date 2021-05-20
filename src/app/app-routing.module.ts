import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HotelComponent} from './components/hotel/hotel.component';
import {ServicioComponent} from './components/servicio/servicio.component';
import {SearchHotelComponent} from './components/search-hotel/search-hotel.component';

const routes: Routes = [
  //una manera de realizarlo
  {path: '', component: HomeComponent}, //un solo uso | va a ser la primer ruta que se mostrará (primer componente)
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'searchH', component: SearchHotelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

