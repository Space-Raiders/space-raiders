import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuDAtterrissageDetailsComponent } from './lieu-d-atterrissage-details.component';

describe('LieuDAtterrissageDetailsComponent', () => {
  let component: LieuDAtterrissageDetailsComponent;
  let fixture: ComponentFixture<LieuDAtterrissageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuDAtterrissageDetailsComponent]
    });
    fixture = TestBed.createComponent(LieuDAtterrissageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
