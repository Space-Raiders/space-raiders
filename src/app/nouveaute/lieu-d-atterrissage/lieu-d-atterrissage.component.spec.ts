import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuDAtterrissageComponent } from './lieu-d-atterrissage.component';

describe('LieuDAtterrissageComponent', () => {
  let component: LieuDAtterrissageComponent;
  let fixture: ComponentFixture<LieuDAtterrissageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuDAtterrissageComponent]
    });
    fixture = TestBed.createComponent(LieuDAtterrissageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
