import {Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SurveyType} from '../../../../shared/models/survey/type';
import {DynamicContainer} from '../../../../shared/directives/dynamic-container';
import {ShortAnswerComponent} from '../short-answer/short-answer.component';
import {FormGroup} from '@angular/forms';
import {CommonAnswerComponent} from './common-answer.component';
import {FormGroupBuilderService} from '../../services/formgroup-builder.service';
import {InitShortAnswer} from '../../../../shared/models/survey/short-answer';
import {InitRadioAnswer} from '../../../../shared/models/survey/radio-answer';
import {RadioAnswerComponent} from '../radio-answer/radio-answer.component';
import {IndexState} from '../../../../shared/directives/drag-n-drop';

@Component({
  selector: 'app-survey-factory',
  templateUrl: './survey-factory.component.html',
  styleUrls: ['./survey-factory.component.css']
})
export class SurveyFactoryComponent implements OnInit {

  /**
   * List of types of questions
   * @type {SurveyType[]}
   */
  types: SurveyType[] = [
    SurveyType.SHORT_ANSWER,
    SurveyType.LONG_ANSWER,
    SurveyType.CHECKBOX,
    SurveyType.RADIO
  ];
  /**
   * Directive [dynamic-cont] marks place, where dynamic question component will be added
   * @type {DynamicContainer}
   */
  @ViewChild(DynamicContainer) dynamicCompContainer: DynamicContainer;
  /**
   * Controller of form array that contains {FormGroup} data of current question
   * @type {FormGroup}
   */
  @Input() control: FormGroup;
  /**
   * Container of parent component, where drag-n-drop should be used
   * @type {HTMLElement}
   */
  @Input() overlay: HTMLElement;
  /**
   * Is listened by parent component, emits ending of drag-n-drop
   * @type {EventEmitter<IndexState>}
   */
  @Output() changeFormArray = new EventEmitter<IndexState>();
  /**
   * Type of current question
   * @type {SurveyType}
   */
  type: SurveyType;//this.control.controls.type.value;

  constructor(private cfr: ComponentFactoryResolver,
              private fbs: FormGroupBuilderService) {
  }

  ngOnInit(): void {
    this.type = <SurveyType>this.control.controls.type.value;
    this.onTypeChange(this.type, false);
  }

  /**
   * Loads dynamic component
   * If newChanging is true - changes model of FormGroup
   * @param {SurveyType} type
   * @param {boolean} newChanging
   */
  onTypeChange(type: SurveyType, newChanging: boolean = true) {
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

  /**
   * Creates instance of new dynamic component
   * adds it to dom
   * inserts formData of component
   * runs method .init() to build form in a dynamic component
   * @param component
   */
  loadComponent(component): void {
    let componentFactory = this.cfr.resolveComponentFactory(component);
    let viewContainerRef = this.dynamicCompContainer.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory),
      componentInstance: CommonAnswerComponent = <any>componentRef.instance;
    componentInstance.formData = <FormGroup>this.control.controls.model;

    componentInstance.init();
  }

  /**
   * Mother fucker
   * @param e
   */
  consoler(e): void {
    console.dir(e);
  }

  /**
   * Runs after drug-n-drop end event
   * Call method of parent component
   * @param {IndexState} indexes
   */
  changeArray(indexes: IndexState): void {
    this.changeFormArray.emit(indexes);
  }

}
