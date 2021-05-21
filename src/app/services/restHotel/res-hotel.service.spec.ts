import { TestBed } from '@angular/core/testing';

import { ResHotelService } from './res-hotel.service';

describe('ResHotelService', () => {
  let service: ResHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
