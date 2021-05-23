import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotel'
})
export class FilterHotelPipe implements PipeTransform {

  transform(hotels: any, filterHotel: any): any {
    if(filterHotel == undefined) return hotels;
    else return hotels.filter(hotel=>{
        return hotel.name.toLowerCase().includes(filterHotel.toLowerCase());
      })
  }

}
