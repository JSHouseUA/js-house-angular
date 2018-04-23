import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {PreparedRegex} from "../../../../shared/models/ui/regex";
import {CommonAnswerComponent} from '../survey-factory/common-answer.component';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent extends CommonAnswerComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('aaa')
  }

  @ViewChild('regexSelect') regexSelect: NgForm;
  @ViewChild('regexForm') regexForm: NgForm;

  regexes: PreparedRegex.Model[] = PreparedRegex.Regexes;
  regex: PreparedRegex.Model = this.regexes[0];
  flags: PreparedRegex.Flag[] = PreparedRegex.flags;

  constructor() {
    super()
  }

  ngOnInit(): void {

  }

  buildForm(): void {
    this.answerForm = <FormGroup>this.formData.controls.formData;
    /**
     * So strange code because of error with multiSelect
     */
    const regexExternal = this.formData.controls.regex.value;
    setTimeout(() => {
      this.regexForm.setValue({
        'regex': regexExternal.regex,
        'name': regexExternal.name,
        'flags': regexExternal.flags
      });
      // this.regexForm.setValue({'name': regexExternal.name});
      // this.regexForm.setValue({'flags': regexExternal.flags});
      // this.formData.addControl('formData', this.answerForm);
      this.formData.setControl('regex', this.regexForm.control);
    });
  }

  onRegexTypeChange(regex: PreparedRegex.Model): void {
    console.log(regex)
  }
  submit(e: NgForm){
    console.dir(e.control)
    console.dir(e.value)
    console.dir(e.valid)
  }

  get isCustomRegex(): boolean{
    return this.regexes.indexOf(this.regex) > 2
  }



}
