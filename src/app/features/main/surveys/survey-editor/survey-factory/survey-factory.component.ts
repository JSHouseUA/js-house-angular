import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {SurveyType} from '../../../../../shared/models/survey/type';
import {DynamicContainer} from '../../../../../core/directives/dynamic-container';
import {ShortAnswerComponent} from '../short-answer/short-answer.component';
import {FormGroup} from '@angular/forms';
import {CommonAnswerComponent} from './common-answer.component';
import {RadioAnswerComponent} from '../radio-answer/radio-answer.component';

@Component({
  selector: 'app-survey-factory',
  templateUrl: './survey-factory.component.html',
  styleUrls: ['./survey-factory.component.css']
})
export class SurveyFactoryComponent implements OnInit {

  types: SurveyType[] = [
    SurveyType.SHORT_ANSWER,
    SurveyType.LONG_ANSWER,
    SurveyType.CHECKBOX,
    SurveyType.RADIO
  ];
  @ViewChild(DynamicContainer) dynamicCompContainer: DynamicContainer;

  @Input() control: FormGroup;
  type: SurveyType;//this.control.controls.type.value;

  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.type = <SurveyType>this.control.controls.type.value;
    this.onTypeChange(this.type);
  }

  onTypeChange(type: SurveyType){
    switch (type) {
      case SurveyType.SHORT_ANSWER:
        this.loadComponent(ShortAnswerComponent);
        break;
      case SurveyType.RADIO:
        this.loadComponent(RadioAnswerComponent);
        break;
    }
  }

  loadComponent(component){
    let componentFactory = this.cfr.resolveComponentFactory(component);
    let viewContainerRef = this.dynamicCompContainer.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory),
      componentInstance: CommonAnswerComponent = <any>componentRef.instance;
    componentInstance.formData = <FormGroup>this.control.controls.model;
    componentInstance.init();
  }

}
