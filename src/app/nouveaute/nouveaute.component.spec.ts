import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauteComponent } from './nouveaute.component';

describe('NouveauteComponent', () => {
  let component: NouveauteComponent;
  let fixture: ComponentFixture<NouveauteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauteComponent]
    });
    fixture = TestBed.createComponent(NouveauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
