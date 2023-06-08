import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDeProfilComponent } from './modification-de-profil.component';

describe('ModificationDeProfilComponent', () => {
  let component: ModificationDeProfilComponent;
  let fixture: ComponentFixture<ModificationDeProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationDeProfilComponent]
    });
    fixture = TestBed.createComponent(ModificationDeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
