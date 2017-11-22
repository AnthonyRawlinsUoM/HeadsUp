import { TestBed, inject } from '@angular/core/testing';

import { GeoJsonconsumerService } from './geo-jsonconsumer.service';

describe('GeoJsonconsumerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoJsonconsumerService]
    });
  });

  it('should be created', inject([GeoJsonconsumerService], (service: GeoJsonconsumerService) => {
    expect(service).toBeTruthy();
  }));
});
