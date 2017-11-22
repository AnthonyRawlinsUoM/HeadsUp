import { TestBed, inject } from '@angular/core/testing';

import { ApiconsumerService } from './apiconsumer.service';

describe('ApiconsumerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiconsumerService]
    });
  });

  it('should be created', inject([ApiconsumerService], (service: ApiconsumerService) => {
    expect(service).toBeTruthy();
  }));
});
