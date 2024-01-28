import _ from 'lodash';
import {Question, QuestionItem} from '../../state/AdditionalTypes';

export const ConvertQuestions = (questions: Question[]) => {
  let newItems: QuestionItem[] = [];

  for (let q of questions) {
    const {correct_answer, incorrect_answers} = q;
    let answers = [...incorrect_answers, correct_answer];
    answers = _.shuffle(answers);

    newItems.push({
      ...q,
      answers,
    });
  }
  return newItems;
};
