import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFactoryComponent } from './survey-factory.component';

describe('SurveyFactoryComponent', () => {
  let component: SurveyFactoryComponent;
  let fixture: ComponentFixture<SurveyFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
