import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SurveyType} from '../../../../../shared/models/survey/type';
import {DynamicContainer} from '../../../../../core/directives/dynamic-container';
import {ShortAnswerComponent} from '../short-answer/short-answer.component';
import {FormGroup} from '@angular/forms';
import {CommonAnswerComponent} from './common-answer.component';
import {FormGroupBuilderService} from '../../services/formgroup-builder.service';
import {InitShortAnswer} from '../../../../../shared/models/survey/short-answer';
import {InitRadioAnswer} from '../../../../../shared/models/survey/radio-answer';
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
  @Input() parent: HTMLElement;
  type: SurveyType;//this.control.controls.type.value;

  constructor(
    private cfr: ComponentFactoryResolver,
    private fbs: FormGroupBuilderService
  ) { }

  ngOnInit() {
    this.type = <SurveyType>this.control.controls.type.value;
    this.onTypeChange(this.type, false);
  }

  onTypeChange(type: SurveyType, newChanging: boolean = true){
    switch (type) {
      case SurveyType.SHORT_ANSWER:
        if (newChanging) this.fbs.resetSurveyElement(this.control, InitShortAnswer, type);
        this.loadComponent(ShortAnswerComponent);
        break;
      case SurveyType.RADIO:
        if (newChanging) this.fbs.resetSurveyElement(this.control, InitRadioAnswer, type);
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

  // onMouseDown(event: MouseEvent, parent: HTMLElement){
  //  console.dir(parent.parentElement.parentElement)
  // }
  consoler(e){
    console.dir(e)
  }

}
