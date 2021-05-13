import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedometrComponent } from './speedometr.component';

describe('SpeedometrComponent', () => {
  let component: SpeedometrComponent;
  let fixture: ComponentFixture<SpeedometrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedometrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedometrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
