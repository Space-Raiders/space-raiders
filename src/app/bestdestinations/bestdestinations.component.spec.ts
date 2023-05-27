import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdestinationsComponent } from './bestdestinations.component';

describe('BestdestinationsComponent', () => {
  let component: BestdestinationsComponent;
  let fixture: ComponentFixture<BestdestinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestdestinationsComponent]
    });
    fixture = TestBed.createComponent(BestdestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
