import {SurveyType} from './type';

export interface BaseAnswer {
  title: string;
  description: string;
  required: boolean;
}

export interface Question {
  model: any;
  type: SurveyType
}
