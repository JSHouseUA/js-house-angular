import {PreparedRegex} from '../ui/regex';
import {BaseAnswer} from './base-answer';

export interface ShortAnswer {
  formData: ShortAnswerData,
  regex: PreparedRegex.Model
}

export interface ShortAnswerData extends BaseAnswer {
  placeholder: string;
  maxLength: number;
}

export let InitShortAnswer: ShortAnswer = {
  formData: {
    title: 'New Question',
    description: '',
    placeholder: '',
    maxLength: 101,
    required: false
  },
  regex: PreparedRegex.Regexes[0]
};
