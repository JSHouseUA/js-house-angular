import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongAnswerComponent } from './long-answer.component';

describe('LongAnswerComponent', () => {
  let component: LongAnswerComponent;
  let fixture: ComponentFixture<LongAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
