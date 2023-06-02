import { TestBed } from '@angular/core/testing';

import { LieuDAtterrissageService } from './lieu-d-atterrissage.service';

describe('LieuDAtterrissageService', () => {
  let service: LieuDAtterrissageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuDAtterrissageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
