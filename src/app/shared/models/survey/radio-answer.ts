import {BaseAnswer} from './base-answer';

export interface RadioAnswer {
  formData: RadioAnswerData
}
export interface RadioAnswerData extends BaseAnswer {
  variants: string[];
}

export let InitRadioAnswer: RadioAnswer = {
  formData: {
    title: 'New Question',
    description: '',
    required: false,
    variants: [
      'Option 1'
    ]
  }
};
