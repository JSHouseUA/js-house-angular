import {Component, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SurveyType} from '../../../../shared/models/survey/type';
import {FormGroupBuilderService} from '../services/formgroup-builder.service';
import {InitShortAnswer} from '../../../../shared/models/survey/short-answer';
import {Question} from '../../../../shared/models/survey/base-answer';

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


  surveyGroup: FormArray = new FormArray([]);

  asd(): void {
  }


  ngOnInit() {
    this.buildInitSurvey()
  }

  buildInitSurvey(){
    let data = <Array<Question>>JSON.parse(localStorage.getItem('asd'));
    if (data && data.length > 0){
      (data).forEach(elem => {
        this.surveyGroup.push(
          this.fbs.getSurveyElement(elem.model, elem.type)
        )
      })
    } else {
      this.surveyGroup.push(
        this.fbs.getSurveyElement(InitShortAnswer, SurveyType.SHORT_ANSWER)
      )
    }
  }

  addQuestion(){
    this.surveyGroup.push(
      this.fbs.getSurveyElement(InitShortAnswer)
    )
  }

  save(){
    localStorage.setItem('asd', JSON.stringify(this.surveyGroup.value))
  }

}
