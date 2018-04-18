import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioAnswerComponent } from './radio-answer.component';

describe('RadioAnswerComponent', () => {
  let component: RadioAnswerComponent;
  let fixture: ComponentFixture<RadioAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
