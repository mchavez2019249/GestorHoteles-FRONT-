import { TestBed } from '@angular/core/testing';

import { RestEventosService } from './rest-eventos.service';

describe('RestEventosService', () => {
  let service: RestEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
