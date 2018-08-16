import { TestBed, inject } from '@angular/core/testing';

import { PhimService } from './phim.service';

describe('PhimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhimService]
    });
  });

  it('should be created', inject([PhimService], (service: PhimService) => {
    expect(service).toBeTruthy();
  }));
});
