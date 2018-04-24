import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {CommonAnswerComponent} from "../survey-factory/common-answer.component";

@Component({
  selector: 'app-long-answer',
  templateUrl: './long-answer.component.html',
  styleUrls: ['./long-answer.component.css']
})
export class LongAnswerComponent extends CommonAnswerComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

    buildForm(): void {
        this.answerForm = <FormGroup>this.formData.controls.formData;
        /**
         * So strange code because of error with multiSelect
         */

    }

}
