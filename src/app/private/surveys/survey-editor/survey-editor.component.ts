import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SurveyType} from '../../../shared/models/survey/type';
import {FormGroupBuilderService} from '../services/formgroup-builder.service';
import {InitShortAnswer} from '../../../shared/models/survey/short-answer';
import {Question} from '../../../shared/models/survey/base-answer';
import {IndexState} from '../../../shared/directives/drag-n-drop';

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
})
export class SurveyEditorComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private fbs: FormGroupBuilderService) {
  }


  /**
   * Contain the survey questions
   * @type {FormArray[]}
   */
  surveyGroup: FormGroup[] = [];//FormArray = new FormArray([]);

  ngOnInit(): void {
    this.buildInitSurvey();
  }

  /**
   * Should get data - a list of question and push them to {{surveyGroup}} (instance of FormGroup)
   */
  buildInitSurvey(): void {
    let data = <Array<Question>>JSON.parse(localStorage.getItem('asd'));
    if (data && data.length > 0) {
      (data).forEach(elem => {
        this.surveyGroup.push(
          this.fbs.getSurveyElement(elem.model, elem.type)
        );
      });
    } else {
      this.surveyGroup.push(
        this.fbs.getSurveyElement(InitShortAnswer, SurveyType.SHORT_ANSWER)
      );
    }
  }

  /**
   * Add question into survey, short answer is default
   */
  addQuestion(): void {
    this.surveyGroup.push(
      this.fbs.getSurveyElement(InitShortAnswer)
    );
  }

  /**
   * Should create a request, now it is fake stub
   */
  save(): void {
    let toSave = this.surveyGroup.map(control => control.value);
    localStorage.setItem('asd', JSON.stringify(toSave));
  }

  /**
   * Runs after drug-n-drop end event
   * changes surveyGroup items order
   * @param {IndexState} indexes
   */
  changeFormArray(indexes: IndexState) {
    const surveyElem = this.surveyGroup.splice(indexes.oldIndex, 1)[0];
    // let tail = this.surveyGroup.splice(indexes.newIndex);
    // this.surveyGroup.push(surveyElem);
    // this.surveyGroup = this.surveyGroup.concat(tail);
    this.surveyGroup.splice(indexes.newIndex, 0, surveyElem);
    console.log(indexes);
  }

}
