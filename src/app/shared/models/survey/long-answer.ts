import {BaseAnswer} from './base-answer';

export interface LongAnswer {
    formData: LongAnswerData
}
export interface LongAnswerData extends BaseAnswer {
    placeholder: string;
}

export let InitLongAnswer: LongAnswer = {
    formData: {
        title: 'New Question',
        description: '',
        required: false,
        placeholder: 'Long Answer'
    }
};
