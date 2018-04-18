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

  surveyGroup: FormArray;

  asd(): void {
    console.dir(this.shortAnswer)
  }


  ngOnInit() {
    this.buildInitSurvey()
  }

  buildInitSurvey(){
    let data = JSON.parse(localStorage.getItem('asd'));
    console.dir(data, InitShortAnswer)
    this.surveyGroup = this.fb.array([
      this.getSurveyElement(!!data ? data.model : InitShortAnswer, !!data ? data.type : null)
    ])
    // debugger;
  }

  getSurveyElement(data: any, type: SurveyType = SurveyType.SHORT_ANSWER): FormGroup{
    return this.fb.group({
      'type': [type],
      'model': this.fbs.dataToFormGroup(data, type)
    })
  }

  addQuestion(){
    this.surveyGroup.push(
      this.getSurveyElement(InitShortAnswer)
    )
  }

  consoler(){
    console.dir(this.surveyGroup.value);
    localStorage.setItem('asd', JSON.stringify(this.surveyGroup.value[0]))
  }

}
