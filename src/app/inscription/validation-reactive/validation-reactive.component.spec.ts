import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationReactiveComponent } from './validation-reactive.component';

describe('ValidationReactiveComponent', () => {
  let component: ValidationReactiveComponent;
  let fixture: ComponentFixture<ValidationReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationReactiveComponent]
    });
    fixture = TestBed.createComponent(ValidationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
