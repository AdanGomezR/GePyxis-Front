import { TestBed } from '@angular/core/testing';

import { SolucionesServiceService } from './soluciones-service.service';

describe('SolucionesServiceService', () => {
  let service: SolucionesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolucionesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
