import { TestBed } from '@angular/core/testing';

import { MotoApiService } from './moto-api.service';

describe('MotoApiService', () => {
  let service: MotoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
