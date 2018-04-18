import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SurveyType} from '../../../../shared/models/survey/type';
import {ShortAnswer} from '../../../../shared/models/survey/short-answer';
import {RadioAnswer} from '../../../../shared/models/survey/radio-answer';

@Injectable()
export class FormGroupBuilderService {
  constructor(private fb: FormBuilder) {
  }

  dataToFormGroup(data: ShortAnswer | any, type: SurveyType): FormGroup {
    switch (type) {
      case SurveyType.SHORT_ANSWER:
        return this.shortAnswer(data);
      case SurveyType.RADIO:
        return this.radioOrCheckboxAnswer(data);
      case SurveyType.CHECKBOX:
        return this.radioOrCheckboxAnswer(data);
    }
  }

  baseAnswerFields(data) {
    return this.fb.group({
      'formData': this.fb.group({
        'title': [data.formData.title, Validators.required],
        'description': [data.formData.description],
        'required': [data.formData.required]
      })
    });
  }

  private shortAnswer(data: ShortAnswer): FormGroup {
    const baseGroup: FormGroup = this.baseAnswerFields(data),
      formData = <FormGroup>baseGroup.controls.formData;
    formData.addControl('placeholder', this.fb.control(data.formData.placeholder));
    formData.addControl('maxLength', this.fb.control(data.formData.maxLength, Validators.required));
    baseGroup.addControl('regex', this.fb.group({
      'flags': this.fb.array(data.regex.flags),
      'name': [data.regex.name],
      'regex': [data.regex.regex]
    }));
    return baseGroup;
  }

  private radioOrCheckboxAnswer(data: RadioAnswer) {
    const baseGroup: FormGroup = this.baseAnswerFields(data),
      formData = <FormGroup>baseGroup.controls.formData;
    formData.addControl('variants', this.fb.array(data.formData.variants));
    return baseGroup;
  }

  getSurveyElement(data: any, type: SurveyType = SurveyType.SHORT_ANSWER): FormGroup{
    return this.fb.group({
      'type': [type],
      'model': this.dataToFormGroup(data, type)
    })
  }
}
