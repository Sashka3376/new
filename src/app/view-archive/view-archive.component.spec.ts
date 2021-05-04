import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArchiveComponent } from './view-archive.component';

describe('ViewArchiveComponent', () => {
  let component: ViewArchiveComponent;
  let fixture: ComponentFixture<ViewArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
