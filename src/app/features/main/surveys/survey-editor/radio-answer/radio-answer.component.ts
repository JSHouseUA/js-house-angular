import { Component, OnInit } from '@angular/core';
import {CommonAnswerComponent} from '../survey-factory/common-answer.component';

@Component({
  selector: 'app-radio-answer',
  templateUrl: './radio-answer.component.html',
  styleUrls: ['./radio-answer.component.css']
})
export class RadioAnswerComponent extends CommonAnswerComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    console.dir(this.formData)
  }

}
