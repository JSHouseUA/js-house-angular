import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {PreparedRegex} from '../../../../shared/models/ui/regex';
import {CommonAnswerComponent} from '../survey-factory/common-answer.component';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent extends CommonAnswerComponent implements OnInit, OnDestroy {
  /**
   * TODO: delete when finish if it is not needed
   */
  ngOnDestroy(): void {
    console.log('aaa');
  }

  /**
   * Layout variable, contains Form as NgForm to add values and get control easy
   * TODO: delete when finish if it is not needed
   * @type {NgForm}
   */
  @ViewChild('regexSelect') regexSelect: NgForm;
  /**
   * Layout variable, contains Form as NgForm to add values and get control easy
   * @type {NgForm}
   */
  @ViewChild('regexForm') regexForm: NgForm;
  /**
   * Array of RegExes types
   * @type {PreparedRegex.Model[]}
   */
  regexes: PreparedRegex.Model[] = PreparedRegex.Regexes;
  /**
   * Active RegEx
   * Default Regex is 'none'
   * @type {PreparedRegex.Model}
   */
  regex: PreparedRegex.Model = this.regexes[0];
  /**
   * List of flags, is used in form select
   * @type {PreparedRegex.Flag[]}
   */
  flags: PreparedRegex.Flag[] = PreparedRegex.flags;

  constructor() {
    super();
  }

  ngOnInit(): void {

  }

  /**
   * This method is included in parent class
   * but here it is changed because we have additional feature RegEx
   *
   * So this method does same thing as parent's one and additionally:
   * - sets values for NgForm for RegEx from formData;
   * - sets back way binding of data (means that it takes control from NgForm for RegEx
   *   and add it back to formData - that is came from parent component);
   */
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
      this.formData.setControl('regex', this.regexForm.control);
    });
  }

  /**
   * TODO: delete when finish
   * @param {PreparedRegex.Model} regex
   */
  onRegexTypeChange(regex: PreparedRegex.Model): void {
    console.log(regex);
  }

  /**
   * TODO: delete when finish
   * @param {NgForm} e
   */
  submit(e: NgForm): void {
    console.dir(e.control);
    console.dir(e.value);
    console.dir(e.valid);
  }

  /**
   * Some hardcode that is used for showing form for RegEx if it had be custom
   * TODO: refactor to make code better, because array can be changing by some developer
   * @returns {boolean}
   */
  get isCustomRegex(): boolean {
    return this.regexes.indexOf(this.regex) > 2;
  }


}
