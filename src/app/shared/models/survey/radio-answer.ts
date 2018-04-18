import {BaseAnswer} from './base-answer';

export interface RadioAnswer {
  formData: RadioAnswerData
}
export interface RadioAnswerData extends BaseAnswer {
  variants: string[];
}
