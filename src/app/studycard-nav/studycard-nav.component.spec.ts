import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycardNavComponent } from './studycard-nav.component';

describe('StudycardNavComponent', () => {
  let component: StudycardNavComponent;
  let fixture: ComponentFixture<StudycardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudycardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
