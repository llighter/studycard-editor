import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycardLoginComponent } from './studycard-login.component';

describe('StudycardLoginComponent', () => {
  let component: StudycardLoginComponent;
  let fixture: ComponentFixture<StudycardLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudycardLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
