import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSubjectsComponent } from './enter-subjects.component';

describe('EnterSubjectsComponent', () => {
  let component: EnterSubjectsComponent;
  let fixture: ComponentFixture<EnterSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
