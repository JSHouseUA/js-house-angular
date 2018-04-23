import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {CommonAnswerComponent} from '../survey-factory/common-answer.component';
import {FormArray, FormBuilder} from '@angular/forms';
import {IndexState} from '../../../../shared/directives/drag-n-drop';
import {ReactiveFormUtil} from '../../../../shared/utils/reactive-form.util';

@Component({
  selector: 'app-radio-answer',
  templateUrl: './radio-answer.component.html',
  styleUrls: ['./radio-answer.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class RadioAnswerComponent extends CommonAnswerComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    console.dir(this.formData)
  }


  remove(index: number){

    (<FormArray>this.answerForm.get('variants')).removeAt(index)
  }

  add(){
    const variantsArray: FormArray = (<FormArray>this.answerForm.get('variants'));
    variantsArray.push(this.fb.control(`Option ${variantsArray.length + 1}`))
  }

  changeArray(indexes: IndexState){
    const variantsArray: FormArray = (<FormArray>this.answerForm.get('variants'));
    const surveyElem = ReactiveFormUtil.splice(variantsArray, indexes.oldIndex, 1)[0];
    ReactiveFormUtil.splice(variantsArray, indexes.newIndex, 0, surveyElem);
  }

}
