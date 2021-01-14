import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSpecializationComponent } from './enter-specialization.component';

describe('EnterSpecializationComponent', () => {
  let component: EnterSpecializationComponent;
  let fixture: ComponentFixture<EnterSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterSpecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
