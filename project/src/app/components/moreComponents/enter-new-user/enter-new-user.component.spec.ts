import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNewUserComponent } from './enter-new-user.component';

describe('EnterNewUserComponent', () => {
  let component: EnterNewUserComponent;
  let fixture: ComponentFixture<EnterNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterNewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
