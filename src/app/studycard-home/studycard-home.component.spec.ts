import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycardHomeComponent } from './studycard-home.component';

describe('StudycardHomeComponent', () => {
  let component: StudycardHomeComponent;
  let fixture: ComponentFixture<StudycardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudycardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
