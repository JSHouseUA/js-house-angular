import {Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

export class CommonAnswerComponent {

  @Input() formData: FormGroup;
  answerForm: FormGroup;

  init(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.answerForm = <FormGroup>this.formData.controls.formData;
  }

  get variants(): FormArray {
    return this.answerForm.get('variants') as FormArray;
  }
}
