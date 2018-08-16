import { TestBed, inject } from '@angular/core/testing';

import { NguoiDungService } from './nguoi-dung.service';

describe('NguoiDungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NguoiDungService]
    });
  });

  it('should be created', inject([NguoiDungService], (service: NguoiDungService) => {
    expect(service).toBeTruthy();
  }));
});
