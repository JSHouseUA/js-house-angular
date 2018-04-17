import {Component, OnChanges, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
})
export class SurveyEditorComponent implements OnInit {
  constructor() { }

  shortAnswer: FormGroup = new FormGroup({});

  asd(): void {
    console.dir(this.shortAnswer)
  }


  ngOnInit() {
  }

}
