import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestActivitiesComponent } from './latest-activities.component';

describe('LatestActivitiesComponent', () => {
  let component: LatestActivitiesComponent;
  let fixture: ComponentFixture<LatestActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
