import _ from 'lodash';
import {
  IncorrectQuizRecord,
  Question,
  QuestionItem,
  QuizRecord,
} from '../../state/AdditionalTypes';

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

export const FilterIncorrectQuestions = (records: QuizRecord[]) => {
  let incorrectRecords: IncorrectQuizRecord[] = [];
  for (let record of records) {
    const {questionAnswers, createdAt} = record;
    const filterdAnswers = questionAnswers.filter(item => !item.isPass);
    for (let answer of filterdAnswers) {
      incorrectRecords.push({
        createdAt,
        question: answer,
      });
    }
  }

  return incorrectRecords;
};
