import {Component, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SurveyType} from '../../../../shared/models/survey/type';
import {FormGroupBuilderService} from '../services/formgroup-builder.service';
import {InitShortAnswer} from '../../../../shared/models/survey/short-answer';

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
})
export class SurveyEditorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private fbs: FormGroupBuilderService
  ) { }

  shortAnswer: FormGroup = new FormGroup({});

  surveyGroup: FormGroup[] = [];

  asd(): void {
    console.dir(this.shortAnswer)
  }


  ngOnInit() {
    this.buildInitSurvey()
  }

  buildInitSurvey(){
    let data = JSON.parse(localStorage.getItem('asd'));
    console.dir(!!data ? data.model : InitShortAnswer);
    this.surveyGroup.push(
      this.fbs.getSurveyElement(!!data ? data.model : InitShortAnswer, !!data ? data.type : SurveyType.SHORT_ANSWER)
    )
  }

  addQuestion(){
    this.surveyGroup.push(
      this.fbs.getSurveyElement(InitShortAnswer)
    )
  }

  consoler(){
    console.dir(this.surveyGroup)
    // localStorage.setItem('asd', JSON.stringify(this.surveyGroup.value[0]))
  }

}
