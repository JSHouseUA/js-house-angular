import {Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

export class CommonAnswerComponent {

  /**
   * Element of parent array
   * @param {FormGroup} formData
   */
  @Input() formData: FormGroup;
  /**
   * Form group just for question
   * @param {FormGroup} answerForm
   */
  answerForm: FormGroup;

  /**
   * Is run from parent factory component to protect creation of form when formData is empty yet
   */
  init(): void {
    this.buildForm();
  }

  /**
   * Takes 'formData' control from survey array element
   * and puts it to internal answerForm
   */
  buildForm(): void {
    this.answerForm = <FormGroup>this.formData.controls.formData;
  }

  /**
   * gets variants from answers, is used only for radios, checkboxes and selects
   * TODO: be sure if we need it in common class, or pu it to radio class
   * @returns {FormArray}
   */
  get variants(): FormArray {
    return this.answerForm.get('variants') as FormArray;
  }
}
