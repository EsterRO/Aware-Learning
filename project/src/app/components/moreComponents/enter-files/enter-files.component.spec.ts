import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFilesComponent } from './enter-files.component';

describe('EnterFilesComponent', () => {
  let component: EnterFilesComponent;
  let fixture: ComponentFixture<EnterFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
